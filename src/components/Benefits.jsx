const benefits = [
  {
    title: 'Local Saskatoon technicians — no 1-800 roulette',
    desc: 'Talk to people who live where you do. Real names, real accountability, real response times.'
  },
  {
    title: '20+ years keeping Saskatchewan running',
    desc: 'From downtown offices to rural operations — stable, reliable, and quietly effective.'
  },
  {
    title: 'Plain English, fixed pricing, nonprofit-friendly',
    desc: 'Clear expectations, fair agreements, and no jargon walls. We make IT human.'
  }
]

function Benefits() {
  return (
    <section className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Why Saskatchewan businesses choose Techion</h2>
          <p className="mt-3 text-neutral-600">Simple, dependable, and local. That’s the point.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_18px_40px_-24px_rgba(0,0,0,0.2)]">
              <h3 className="text-base font-semibold text-neutral-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
