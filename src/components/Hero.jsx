import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients and content */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(244,114,182,0.12),transparent_60%),radial-gradient(900px_500px_at_20%_20%,rgba(129,140,248,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Building immersive digital experiences for the next era
          </h1>
          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl">
            BlueFoxCode Solutions crafts high-performance websites, interactive 3D interfaces, and modern web apps. We blend design, engineering, and motion to bring ideas to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
              Explore Services
            </a>
            <a href="#work" className="rounded-full border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              See Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
