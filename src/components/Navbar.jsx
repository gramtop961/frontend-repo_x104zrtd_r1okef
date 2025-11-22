import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-neutral-900 text-white grid place-items-center shadow-sm"><span className="text-sm font-semibold">TT</span></div>
            <div className="text-neutral-900">
              <p className="font-semibold leading-none">Techion Technology</p>
              <p className="text-xs text-neutral-500 leading-none">Solutions Inc.</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#" className="hover:text-neutral-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
            <a href="#partners" className="hover:text-neutral-900 transition-colors">Partners</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>

          <a href="#book" className="ml-4 inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-800 transition-colors">
            Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
