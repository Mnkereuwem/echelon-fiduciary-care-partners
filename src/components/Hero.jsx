export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 architectural-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-bottle via-bottle/95 to-bottle-dark" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bottle-light/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="relative section-padding w-full max-w-7xl mx-auto pt-32 pb-24">
        <div className="max-w-4xl animate-slide-up">
          <p className="section-label mb-6">Southern California · Fiduciary Clinical Advisory</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-cream leading-[1.1] mb-8">
            Clinical Risk Management for{' '}
            <span className="text-champagne italic">Complex Estates.</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream/75 leading-relaxed max-w-3xl mb-12 font-light">
            We stabilize family crisis, assess cognitive vulnerability, and shield corporate
            trustees from liability. Premium clinical oversight for Southern California&apos;s
            elite legal and financial fiduciaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Partner With Us
            </a>
            <a href="#portals" className="btn-secondary">
              Explore Our Portals
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 right-6 md:right-12 lg:right-20 hidden md:flex flex-col items-end gap-2 opacity-40">
          <div className="w-px h-24 bg-champagne" />
          <span className="font-sans text-[10px] tracking-ultra uppercase text-champagne rotate-90 origin-right translate-x-8">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
