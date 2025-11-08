import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureStrip from './components/FeatureStrip.jsx';
import Benefits from './components/Benefits.jsx';
import Integrations from './components/Integrations.jsx';
import SocialProof from './components/SocialProof.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
return (
<>
<Helmet>
<html lang="en" />
<title>TTM — Real‑time Fleet Intelligence</title>
<meta name="description" content="Monitor fleets in real time, automate reporting, and ensure compliance with connected hardware and analytics." />
<meta property="og:title" content="TTM — Fleet Intelligence" />
<meta property="og:description" content="Safer, more efficient operations through connected telematics and analytics." />
<meta property="og:image" content="/og-image.png" />
</Helmet>
<div className="relative overflow-x-clip">
{/* gradient background */}
<div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-30" style={{ background: 'radial-gradient(600px 600px at 50% 50%, #2ee6ff55, transparent 60%), radial-gradient(600px 600px at 60% 40%, #6a5cff55, transparent 60%)'}} />


<Navbar />
<main>
<Hero />
<FeatureStrip />
<Benefits />
<Integrations />
<SocialProof />
<ContactForm />
</main>
<Footer />
</div>
</>
);
}