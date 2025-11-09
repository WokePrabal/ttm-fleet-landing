import { ShieldCheckIcon, SignalIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/24/outline";

const features = [
  { icon: SignalIcon, title: "ELD & Telematics", desc: "Engine data, GPS, driver status and logs in one view." },
  { icon: ChartBarIcon, title: "Analytics", desc: "Utilization, idling, routes, and cost insights." },
  { icon: ShieldCheckIcon, title: "Compliance", desc: "Automated reports and alerts for safer operations." },
  { icon: ClockIcon, title: "Real-time Visibility", desc: "Live location and ETAs across fleet, depots, and jobs." }
];

export default function FeatureStrip() {
  return (
    <section id="features" className="section py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-2xl p-5">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "var(--grad)" }}>
              <Icon className="h-6 w-6 text-slate-900" />
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
