import { useState } from 'react';


export default function Navbar() {
const [open, setOpen] = useState(false);
return (
<header className="section py-5">
<nav className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
<a href="#top" className="flex items-center gap-2" aria-label="TTM home">
<div className="h-8 w-8 rounded-lg" style={{ background: 'var(--grad)' }} />
<span className="font-semibold tracking-wide">TTM</span>
</a>
<button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>
<span className="sr-only">Toggle menu</span>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
</button>
<ul className={`md:flex items-center gap-6 ${open ? 'block mt-4' : 'hidden md:flex'}`}>
<li><a href="#features" className="hover:underline underline-offset-4">Features</a></li>
<li><a href="#benefits" className="hover:underline underline-offset-4">Benefits</a></li>
<li><a href="#integrations" className="hover:underline underline-offset-4">Integrations</a></li>
<li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
<li>
<a href="#contact" className="btn-primary">Book Demo</a>
</li>
</ul>
</nav>
</header>
);
}