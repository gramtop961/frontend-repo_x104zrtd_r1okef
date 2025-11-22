function FinalCTA() {
  return (
    <section id="book" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-sky-50/30" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(800px 200px at 50% 10%, rgba(253,186,116,0.15), transparent 60%), radial-gradient(800px 200px at 40% 0%, rgba(125,211,252,0.13), transparent 60%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
          Ready to finally stop stressing about IT?
        </h2>
        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
          Book a quick, no-pressure discovery call. We’ll map out your environment and recommend exactly what matters.
        </p>
        <div className="mt-8">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-neutral-800 transition-colors">
            Book a Free 15-Minute IT Discovery Call →
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
