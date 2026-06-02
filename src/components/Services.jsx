const services = [
  {
    number: '01',
    title: 'Comprehensive Psychosocial Assessments',
    description:
      'Objective, court-ready evaluations of cognitive safety, lifestyle stabilization, and capacity.',
  },
  {
    number: '02',
    title: 'Trustee Clinical Audits',
    description:
      'Acting as the eyes and ears on the ground for corporate and private trustees to monitor long-distance beneficiaries.',
  },
  {
    number: '03',
    title: 'Family System De-escalation',
    description:
      'Mediating toxic or high-conflict family dynamics to prevent estate litigation from stalling.',
  },
  {
    number: '04',
    title: 'Placement & Care Risk Mitigation',
    description:
      'Designing and auditing premium residential transitions and private duty nursing plans.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-bottle-dark border-t border-champagne/15">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="section-label">Core Services</p>
          <h2 className="section-title max-w-2xl">The Deliverables</h2>
          <p className="mt-6 font-sans text-cream/60 max-w-xl leading-relaxed">
            Formed by an Ivy League-trained clinician with an extensive background in complex
            systems, family architecture, and crisis navigation.
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
