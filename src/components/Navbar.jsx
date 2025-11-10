import { useState } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400">
              <Sparkles className="h-5 w-5 text-white drop-shadow" />
            </div>
            <span className="text-white font-semibold tracking-wide group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 transition">
              BlueFoxCode Solutions
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm hover:bg-white/20 transition border border-white/10"
            >
              <Rocket className="h-4 w-4" /> Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 text-white px-3 py-2 hover:bg-white/20 border border-white/10"
              >
                <Rocket className="h-4 w-4" /> Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
