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

    async function loadSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      setSession(session);

      if (session?.user) {
        try {
          const userProfile = await getProfile(session.user.id);
          setProfile(userProfile);
        } catch (error) {
          console.error("Profile loading failed:", error);
        }
      }

      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);

      if (!newSession) {
        setProfile(null);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user: session?.user || null,
    profile,
    loading,
    isLoggedIn: Boolean(session),
    isPremium:
  profile?.subscription_status === "active" &&
  (!profile?.current_period_end ||
    new Date(profile.current_period_end) > new Date()),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
