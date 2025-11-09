export default function SocialProof() {
  const logos = [
    { alt: "Samsara", src: "/logos/samsara.svg" },
    { alt: "TruckX", src: "/logos/truckx.svg" },
    { alt: "Verizon Connect", src: "/logos/verizon.svg" }
  ];

  const quotes = [
    {
      q: "We cut idle time by double digits within the first quarter. The live view is a game changer.",
      a: "Ops Director, Regional Carrier"
    },
    {
      q: "Audit trails and HOS logs are finally painless. Reports just arrive in my inbox.",
      a: "Compliance Lead, Logistics"
    }
  ];

  return (
    <section className="section py-14">
      <p className="text-center text-sm text-slate-400">Inspired by industry standards</p>
      <div className="mt-4 flex items-center justify-center gap-10 opacity-70 flex-wrap">
        {logos.map((l) => (
          <img key={l.alt} src={l.src} alt={`${l.alt} logo`} className="h-6" />
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {quotes.map((t, i) => (
          <figure key={i} className="glass rounded-2xl p-6">
            <blockquote className="text-slate-200">“{t.q}”</blockquote>
            <figcaption className="mt-3 text-sm text-slate-400">— {t.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
