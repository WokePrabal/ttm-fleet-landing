export default function Hero() {
  return (
    <section className="section pt-6 md:pt-10" id="top">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Real-time <span className="grad-text">Fleet Intelligence</span> for Safer, More Efficient Operations
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl">
            Monitor assets, automate reporting, and optimize compliance with connected hardware, mobile apps, and analytics.
            Built for visibility and scale.
          </p>

          <div className="mt-7 flex gap-4">
            <a href="#contact" className="btn-primary">Book Demo</a>
            <a href="#contact" className="btn-secondary">Request Pricing</a>
          </div>

          <p className="mt-4 text-sm text-slate-400">No credit card required · Quick setup</p>
        </div>

        <div>
          <div className="glass rounded-3xl p-4 md:p-6">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt="Fleet trucks at night"
              className="rounded-2xl object-cover w-full h-[260px] md:h-[360px]"
            />

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="glass rounded-xl p-3">
                <p className="text-slate-300">Live Vehicles</p>
                <p className="text-2xl font-semibold grad-text">1,284</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-slate-300">On-time</p>
                <p className="text-2xl font-semibold grad-text">98.2%</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-slate-300">Incidents</p>
                <p className="text-2xl font-semibold grad-text">↓ 32%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
