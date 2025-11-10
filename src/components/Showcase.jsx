export default function Showcase() {
  const works = [
    {
      title: 'Galaxy UI Kit',
      desc: 'A component system for dark, cosmic interfaces with motion presets.',
      href: 'https://studio-seven-zeta-20.vercel.app/',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Neon Runner Site',
      desc: 'Marketing site with Spline hero and reactive gradients.',
      href: 'https://studio-seven-zeta-20.vercel.app/',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Interactive Dashboard',
      desc: 'Real-time metrics with 3D data stories and subtle motion cues.',
      href: 'https://studio-seven-zeta-20.vercel.app/',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="work" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
          <p className="mt-3 text-white/70">Highlights from recent projects and experiments.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w) => (
            <a key={w.title} href={w.href} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={w.image} alt={w.title} className="h-56 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="text-sm text-white/70">{w.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
