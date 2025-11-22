import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft light overlay and grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white"></div>
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.9) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        </div>
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 pt-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-neutral-900">
              Saskatoon’s local IT team that actually answers the phone.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl">
              We handle your hardware, software, and everything in between — so your business runs without the usual IT headaches.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-neutral-800 transition-colors">
                Book a Free 15-Minute IT Discovery Call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
