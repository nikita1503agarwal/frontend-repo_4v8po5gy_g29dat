import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-tr from-blue-600 to-indigo-500" />
            <span>BlueFoxCode Solutions</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a
              href="https://studio-seven-zeta-20.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
            >
              Visit Studio
            </a>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block rounded-md px-3 py-2 hover:bg-slate-100">Home</a>
            <a href="#services" className="block rounded-md px-3 py-2 hover:bg-slate-100">Services</a>
            <a href="#work" className="block rounded-md px-3 py-2 hover:bg-slate-100">Work</a>
            <a href="#contact" className="block rounded-md px-3 py-2 hover:bg-slate-100">Contact</a>
            <a href="https://studio-seven-zeta-20.vercel.app" target="_blank" rel="noreferrer" className="block rounded-md px-3 py-2 bg-slate-900 text-white hover:bg-slate-800">Visit Studio</a>
          </div>
        )}
      </nav>
    </header>
  )
}
