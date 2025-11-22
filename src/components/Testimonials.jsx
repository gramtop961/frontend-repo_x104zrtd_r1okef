function Testimonials() {
  const quotes = [
    {
      quote: 'They’re the first IT partner we’ve had where our team stopped dreading support tickets. Fast, calm, and they follow through.',
      org: 'Operations Director, Manufacturing'
    },
    {
      quote: 'Clear pricing, zero surprises. The board loves that, and so do we.',
      org: 'Executive Director, Nonprofit'
    },
    {
      quote: 'Projects move without drama. They communicate like normal humans, which is rare in IT.',
      org: 'COO, Professional Services'
    }
  ]

  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">What our clients say</h2>
          <p className="mt-3 text-neutral-600">Calm, consistent, and accountable. That’s the feedback we hear most.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_18px_38px_-24px_rgba(0,0,0,0.2)]">
              <p className="text-[15px] leading-7 text-neutral-800">“{q.quote}”</p>
              <p className="mt-4 text-sm font-medium text-amber-700">{q.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
