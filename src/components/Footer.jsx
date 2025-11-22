function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">Proudly Saskatoon-based | Serving all of Saskatchewan</p>
          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#partners" className="hover:text-neutral-900">Partners</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
