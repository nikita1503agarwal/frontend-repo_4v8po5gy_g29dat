import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! We'll reach out within 24 hours.")
  }

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let's build something</h2>
          <p className="mt-3 text-slate-600">Tell us about your idea and we'll get back shortly.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
          <input required placeholder="Name" className="rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
          <input required placeholder="Email" type="email" className="rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Company" className="rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" />
          <textarea required placeholder="What are you building?" rows={5} className="rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-white hover:bg-slate-800" type="submit">
              Send message
            </button>
            {status && <span className="text-emerald-600 text-sm">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
