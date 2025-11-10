const projects = [
  {
    name: 'Interactive Portfolio',
    tag: '3D • Marketing',
    url: '#',
  },
  {
    name: 'SaaS Dashboard',
    tag: 'Web App',
    url: '#',
  },
  {
    name: 'E‑commerce Microsite',
    tag: 'Brand',
    url: '#',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A peek at recent builds combining performance, polish, and play.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.name} href={p.url} className="group rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 hover:shadow-xl transition">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/30 via-sky-400/30 to-cyan-300/30" />
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-slate-500">{p.tag}</div>
                <div className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-blue-600">{p.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
