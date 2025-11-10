import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! We will get back to you shortly.');
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s collaborate</h2>
        <p className="mt-3 text-white/70">Tell us about your idea and timeline. We’ll reply within 1–2 business days.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" />
          <textarea required name="message" placeholder="What are you building?" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"></textarea>

          <div className="flex items-center gap-3">
            <button type="submit" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
              Send message
            </button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
