import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  // replace later with your actual form endpoint
  const action = "https://formspree.io/f/your-id";

  return (
    <section id="contact" className="section py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold">See TTM in action</h2>
          <p className="mt-3 text-slate-300 max-w-lg">
            Tell us about your fleet and we’ll tailor a walkthrough. You’ll get a recorded demo, pricing guidance, and a checklist
            to evaluate platforms.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Response within 1 business day</li>
            <li>No sales spam; unsubscribe anytime</li>
            <li>Privacy-first — your data stays yours</li>
          </ul>
        </div>

        <form action={action} method="POST" className="glass rounded-2xl p-6 space-y-4" onSubmit={() => setStatus("submitted")}>
          <label className="block">
            <span className="text-sm text-slate-300">Full name</span>
            <input required name="name" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-vivo1" placeholder="Jane Doe" />
          </label>
          <label className="block">
            <span className="text-sm text-slate-300">Work email</span>
            <input required type="email" name="email" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-vivo1" placeholder="jane@company.com" />
          </label>
          <label className="block">
            <span className="text-sm text-slate-300">Company</span>
            <input name="company" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-vivo1" placeholder="Acme Logistics" />
          </label>
          <label className="block">
            <span className="text-sm text-slate-300">Fleet size</span>
            <select name="fleet_size" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-vivo1">
              <option>1-25</option>
              <option>26-100</option>
              <option>101-500</option>
              <option>501+</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-slate-300">What would you like to improve?</span>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-vivo1" placeholder="Compliance, idling, routing, visibility…" />
          </label>

          <div className="flex gap-3">
            <button className="btn-primary" type="submit">Book Demo</button>
            <a href="#contact" className="btn-secondary">Request Pricing</a>
          </div>

          {status === "submitted" && <p className="text-sm text-emerald-400">Thanks — we’ll be in touch.</p>}
        </form>
      </div>
    </section>
  );
}
