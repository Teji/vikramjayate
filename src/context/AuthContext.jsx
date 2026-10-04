import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { getProfile } from "../services/auth";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProfile(userId) {
      try {
        const userProfile = await getProfile(userId);
        if (mounted) setProfile(userProfile);
      } catch (error) {
        console.error("Profile loading failed:", error);
        if (mounted) setProfile(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    async function loadSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        if (!mounted) return;

        setSession(data.session);

        if (data.session?.user) {
          await loadProfile(data.session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      } catch (error) {
        console.error("Session loading failed:", error);
        if (mounted) {
          setSession(null);
          setProfile(null);
          setLoading(false);
        }
      }
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!mounted) return;

      setSession(newSession);

      if (!newSession?.user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setTimeout(() => {
        if (mounted) loadProfile(newSession.user.id);
      }, 0);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const isPremium =
    profile?.subscription_status === "active" &&
    (!profile?.current_period_end ||
      new Date(profile.current_period_end) > new Date());

  const value = {
    session,
    user: session?.user || null,
    profile,
    loading,
    isLoggedIn: Boolean(session),
    isAdmin: profile?.role === "admin",
    isPremium,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
