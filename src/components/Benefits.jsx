export default function Benefits() {
  const items = [
    {
      h: "Reduce Risk",
      p: "Detect harsh events and risky behavior earlier with configurable alerts."
    },
    {
      h: "Lower Costs",
      p: "Cut idling, improve routing, and reduce fuel and maintenance waste."
    },
    {
      h: "Streamline Compliance",
      p: "Automate hours-of-service logs and reporting to stay audit-ready."
    }
  ];

  return (
    <section id="benefits" className="section py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((b) => (
          <article key={b.h} className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold grad-text">{b.h}</h3>
            <p className="mt-3 text-slate-300">{b.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
