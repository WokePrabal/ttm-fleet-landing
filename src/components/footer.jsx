export default function Footer() {
  return (
    <footer className="section py-10">
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} TTM — Total Transport Management</p>
        <nav className="flex gap-5">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#benefits" className="hover:underline">Benefits</a>
          <a href="#integrations" className="hover:underline">Integrations</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
