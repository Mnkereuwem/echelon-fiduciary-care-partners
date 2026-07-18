const portals = [
  {
    id: 'qme-portal',
    audience: 'For Medical Experts',
    portal: 'The QME Portal',
    headline: 'Practice Medicine. We Handle the Infrastructure.',
    subheadline:
      'A Turnkey Administrative and Logistics Network Designed to Maximize Your Expert Practice, Eliminate Document Fatigue, and Protect Your Clinical Time.',
    valueProps: [
      {
        title: 'Statewide Physical Distribution',
        description:
          'Gain access to 10 managed, compliant medical offices across California, supporting a broader QME panel presence without requiring physicians to build and operate each location independently.',
      },
      {
        title: 'The Echelon Chrono-Engine™',
        description:
          'Our proprietary e-discovery processing framework ingests complex, multi-thousand-page medical histories and transforms unorganized data into highly structured, sequential clinical timelines.',
      },
      {
        title: 'Comprehensive Case Management',
        description:
          'Full-stack administrative support covering intake workflow, computerized psychological testing logistics, strict 30-day regulatory timeline enforcement, and dedicated statutory billing collection management.',
      },
    ],
  },
  {
    id: 'payor-portal',
    audience: 'For Law Firms & Claims Examiners',
    portal: 'The Payor Portal',
    headline: 'California QME-Grade Medical-Legal Evidence.',
    subheadline:
      'Objective, Data-Verified Forensic Timelines and Comprehensive Evaluative Reporting Delivered with Absolute Statutory Compliance.',
    valueProps: [
      {
        title: 'Precision Document Verification',
        description:
          'Every record set undergoes rigorous automated audit checks to ensure absolute historical completeness, eliminating missing exhibits, duplicates, and page omissions.',
      },
      {
        title: 'Guaranteed 30-Day Service',
        description:
          'Strict operational protocols support adherence to California’s statutory submission deadlines and reduce late-delivery risk.',
      },
      {
        title: 'Unassailable Evidence Timelines',
        description:
          'Evaluations are backed by machine-verified, cross-referenced chronological summaries, creating highly objective reports engineered to withstand aggressive cross-examination and deposition scrutiny.',
      },
    ],
  },
]

export default function Portals() {
  return (
    <section id="portals" className="relative bg-bottle border-t border-champagne/15">
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="text-center mb-16 md:mb-20">
          <p className="section-label">Dual Portal Access</p>
          <h2 className="section-title">Built for Experts. Built for Payors.</h2>
          <p className="mt-6 font-sans text-cream/60 max-w-2xl mx-auto leading-relaxed">
            Two purpose-built platforms—one for evaluating clinicians, one for the legal and
            claims professionals who rely on defensible medical-legal evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          {portals.map((portal) => (
            <article
              key={portal.id}
              id={portal.id}
              className="group gold-border gold-border-hover bg-bottle-dark/80 p-8 md:p-10 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-champagne/5 -translate-y-1/2 translate-x-1/2 rotate-45 transition-transform duration-500 group-hover:scale-110" />

              <div className="relative space-y-8">
                <div>
                  <p className="font-sans text-xs uppercase tracking-ultra text-champagne/80 mb-2">
                    {portal.audience}
                  </p>
                  <p className="font-serif text-lg text-champagne italic mb-6">{portal.portal}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream leading-tight mb-4 group-hover:text-champagne transition-colors duration-300">
                    {portal.headline}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-cream/65 leading-relaxed">
                    {portal.subheadline}
                  </p>
                </div>

                <div className="space-y-6 pt-2 border-t border-champagne/20">
                  {portal.valueProps.map((prop) => (
                    <div key={prop.title} className="flex gap-4">
                      <div className="shrink-0 w-1.5 h-1.5 mt-2.5 bg-champagne/70 group-hover:bg-champagne transition-colors duration-300" />
                      <div>
                        <h4 className="font-serif text-lg text-cream mb-2">{prop.title}</h4>
                        <p className="font-sans text-sm text-cream/60 leading-relaxed">
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 lg:mt-10 gold-border bg-bottle-dark/80 p-8 md:p-10 lg:p-12">
          <p className="section-label">Fair-Market-Value Engagement</p>
          <h3 className="font-serif text-2xl md:text-3xl text-cream leading-tight mb-5">
            Transparent Infrastructure. Physician Independence.
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <p className="font-sans text-sm md:text-base text-cream/65 leading-relaxed">
              Our fee structure consists of a flat monthly infrastructure retainer plus
              pass-through expenses. The retainer reflects the cost of leasing, furnishing,
              staffing, and administering 10 compliant medical offices across California, as
              well as managing high-volume medical records and QME panel documentation.
            </p>
            <p className="font-sans text-sm md:text-base text-cream/65 leading-relaxed">
              We also coordinate approved practice expenses that may include physician travel,
              meals, and accommodations. Echelon Med Legal provides non-clinical infrastructure
              and administrative support only; we do not make clinical decisions, direct
              medical opinions, or interfere with any part of the physician&apos;s evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
