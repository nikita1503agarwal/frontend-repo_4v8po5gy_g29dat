import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-black/5 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} BlueFoxCode Solutions. All rights reserved.</p>
          <a href="https://studio-seven-zeta-20.vercel.app" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:text-blue-700">Visit our Studio →</a>
        </div>
      </footer>
    </div>
  )
}
