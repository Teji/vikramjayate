import { BarChart3, BookOpen, BriefcaseBusiness, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: BarChart3,
    value: "Market",
    label: "Stock Analysis",
  },
  {
    icon: BookOpen,
    value: "Price Action",
    label: "Structured Learning",
  },
  {
    icon: BriefcaseBusiness,
    value: "Professional",
    label: "Market Guidance",
  },
];

export default function ExperienceStats() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-400/10 flex items-center justify-center">
              <Icon size={20} className="text-emerald-400" />
            </div>

            <div>
              <div className="font-semibold text-white">
                {value}
              </div>
              <div className="text-xs text-gray-500">
                {label}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
