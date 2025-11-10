import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} BlueFoxCode Solutions. All rights reserved.</p>
        <div className="text-sm text-white/60">
          Built with React, Tailwind, and Spline.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
