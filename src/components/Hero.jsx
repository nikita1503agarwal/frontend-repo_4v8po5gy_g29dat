import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[88vh] w-full overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live • Interactive 3D
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Modern web experiences for ambitious brands
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            BlueFoxCode Solutions blends engineering and design to craft playful, high-performing sites powered by 3D and motion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-white hover:bg-slate-800">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-slate-900 ring-1 ring-black/10 hover:bg-slate-50">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
