const services = [
  {
    title: 'Web Apps',
    desc: 'High-performance React apps with clean architecture and delightful UX.',
    emoji: '🚀'
  },
  {
    title: '3D & Motion',
    desc: 'Spline scenes, WebGL accents, and tasteful animations that feel alive.',
    emoji: '✨'
  },
  {
    title: 'Brand Sites',
    desc: 'Modern marketing sites that convert with speed, style, and clarity.',
    emoji: '🎯'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Crafting interactive, scalable interfaces that push your product forward.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/5 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] transition hover:shadow-lg">
              <div className="text-3xl">{s.emoji}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-4 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
