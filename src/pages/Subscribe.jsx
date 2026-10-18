
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const fallbackSettings = {
  monthly_price: 499,
  yearly_price: 4999,
  whatsapp_number: "",
};

function getWhatsAppLink(number, plan, price) {
  const phone = String(number || "").replace(/\D/g, "");

  if (!phone) return null;

  const message = `Hello Vikram Jayate, I am interested in the ${plan} subscription plan (₹${price}). Please share the payment and activation details.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function Subscribe() {
  const [settings, setSettings] = useState(fallbackSettings);

  useEffect(() => {
    async function loadSettings() {
      const { data, error } = await supabase
        .from("site_settings")
        .select("monthly_price, yearly_price, whatsapp_number")
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        setSettings({ ...fallbackSettings, ...data });
      }
    }

    loadSettings();
  }, []);

  const plans = [
    {
      name: "Monthly",
      price: settings.monthly_price,
      period: "month",
      description: "Flexible monthly access to premium content.",
    },
    {
      name: "Yearly",
      price: settings.yearly_price,
      period: "year",
      description: "Long-term access with better overall value.",
    },
  ];

  return (
    <main className="bg-[#07090c] text-white min-h-[70vh]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">
            Membership
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Choose Your Subscription
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Get access to premium market analysis and recommendations.
            Contact our team on WhatsApp to subscribe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const whatsappUrl = getWhatsAppLink(
              settings.whatsapp_number,
              plan.name,
              plan.price
            );

            return (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-[#10151a] p-8 hover:border-emerald-500/50 transition-colors"
              >
                <h2 className="text-2xl font-semibold">
                  {plan.name} Plan
                </h2>

                <div className="mt-6">
                  <span className="text-5xl font-bold text-emerald-400">
                    ₹{Number(plan.price).toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-400 ml-2">
                    / {plan.period}
                  </span>
                </div>

                <p className="text-gray-400 mt-6 min-h-14">
                  {plan.description}
                </p>

                <div className="mt-7 space-y-3 text-sm text-gray-300">
                  <p>✓ Premium market analysis</p>
                  <p>✓ Member-only recommendations</p>
                  <p>✓ Subscription support</p>
                </div>

                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-4 font-semibold text-black hover:bg-emerald-400 transition-colors"
                  >
                    Contact Me on WhatsApp →
                  </a>
                ) : (
                  <p className="mt-9 rounded-xl border border-yellow-500/20 p-4 text-center text-sm text-yellow-400">
                    WhatsApp contact is not configured yet.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-12">
          Premium access is activated manually after payment verification.
          Trading involves market risk. Returns are not guaranteed.
        </p>
      </div>
    </main>
  );
}

