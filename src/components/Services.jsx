const services = [
  {
    number: '01',
    title: '10 Compliant Medical Offices',
    description:
      'Leased, furnished, staffed, and administratively managed locations across California designed to support QME panel coverage.',
  },
  {
    number: '02',
    title: 'QME Panel Administration',
    description:
      'Non-clinical coordination of intake, scheduling, court and legal documents, deadlines, and panel-related workflows for the evaluating physician.',
  },
  {
    number: '03',
    title: 'Medical Record Management',
    description:
      'High-volume record ingestion, verification, organization, and chronological preparation that reduces document fatigue and protects physician time.',
  },
  {
    number: '04',
    title: 'Physician Logistics',
    description:
      'Administrative coordination of approved travel, meals, accommodations, testing logistics, billing support, and other practice expenses.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-bottle-dark border-t border-champagne/15">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="section-label">California QME Infrastructure</p>
          <h2 className="section-title max-w-2xl">The Administrative Platform</h2>
          <p className="mt-6 font-sans text-cream/60 max-w-xl leading-relaxed">
            Purpose-built for psychiatrists and other physicians who want to expand their QME
            practice without building a statewide operational system from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.number}
              className="group gold-border gold-border-hover p-8 md:p-10 bg-bottle/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 -translate-y-1/2 translate-x-1/2 rotate-45 transition-transform duration-500 group-hover:scale-110" />
              <span className="font-serif text-5xl text-champagne/25 group-hover:text-champagne/40 transition-colors duration-300">
                {service.number}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-cream mt-4 mb-4 group-hover:text-champagne transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-cream/65 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
