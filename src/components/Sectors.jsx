const sectors = [
  {
    title: 'Psychiatrists',
    description:
      'Supporting psychiatric experts with a turnkey administrative platform that protects clinical time and preserves independent medical judgment.',
  },
  {
    title: 'Physician Evaluators',
    description:
      'Partnering with qualified MDs seeking statewide QME infrastructure, disciplined document workflows, and reliable practice logistics.',
  },
  {
    title: 'Law Firms & Claims Examiners',
    description:
      'Delivering organized records, dependable administrative coordination, and timely medical-legal reporting support.',
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="relative bg-bottle-dark border-t border-champagne/15">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="section-label">QME Partner Network</p>
          <h2 className="section-title">Who We Partner With</h2>
          <p className="mt-6 font-sans text-cream/60 max-w-2xl mx-auto leading-relaxed">
            Focused on California psychiatrists, physician evaluators, and the legal and claims
            professionals who rely on complete, timely QME administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="group text-center md:text-left p-8 lg:p-10 gold-border gold-border-hover bg-bottle/40 transition-all duration-300"
            >
              <div className="w-12 h-px bg-champagne mx-auto md:mx-0 mb-8 group-hover:w-20 transition-all duration-500" />
              <h3 className="font-serif text-xl lg:text-2xl text-cream mb-4 group-hover:text-champagne transition-colors duration-300">
                {sector.title}
              </h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                {sector.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
