export default function Integrations() {
  const items = [
    { name: "OBD-II / J1939", blurb: "Supports common vehicle buses for rich engine telemetry." },
    { name: "TTM Mobile App", blurb: "iOS & Android driver workflows and DVIR." },
    { name: "CSV / Webhooks", blurb: "Export, automate, and connect to your systems." }
  ];

  return (
    <section id="integrations" className="section py-16">
      <div className="glass rounded-3xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Hardware & Software that actually connects</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Pair connected hardware with cloud analytics: simple installs, secure data, and a platform that scales with your fleet size.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.name} className="rounded-2xl p-5 border border-white/10">
              <h3 className="font-semibold grad-text">{it.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{it.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
