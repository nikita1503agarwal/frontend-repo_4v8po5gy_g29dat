import { Code, Palette, Rocket, Layers } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Apps',
    desc: 'Fast, scalable applications with modern stacks and clean architectures.'
  },
  {
    icon: Palette,
    title: 'Design & Brand Systems',
    desc: 'Consistent, beautiful interfaces with accessible, responsive design.'
  },
  {
    icon: Layers,
    title: '3D & Interactive UI',
    desc: 'Spline, WebGL, and motion to build immersive, interactive experiences.'
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'CI/CD, analytics, SEO, and performance tuning to ship with confidence.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">Solutions tailored for startups, studios, and forward-thinking teams.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 border border-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
