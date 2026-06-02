const education = [
  {
    institution: "St. Paul's School",
    location: 'Concord, NH',
    detail:
      'Secondary education instilling a foundation of strict excellence and institutional discipline.',
  },
  {
    institution: 'Hamilton College',
    degree: 'Undergraduate',
    detail:
      'Undergraduate study developing advanced analytical frameworking and clear, objective argumentation—sharpened on the football field and track, where the discipline of a varsity athlete translates directly to sustained performance under fiduciary pressure.',
  },
  {
    institution: 'Columbia University',
    degree: 'Master of Social Work (MSW)',
    detail:
      'Graduate specialization in clinical family systems, advanced psychopathology, and crisis de-escalation.',
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="relative border-t border-champagne/15">
      <div className="absolute inset-0 architectural-grid opacity-30" />
      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="mb-16">
          <p className="section-label">Pedigree & Biography</p>
          <h2 className="section-title">Rigorous Training. Deep Clinical Execution.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-champagne/30" />
              <div className="absolute -inset-6 border border-champagne/15" />
              <div className="relative h-full w-full bg-bottle-light gold-border overflow-hidden">
                <img
                  src="/headshot.png"
                  alt="Founder, Echelon Fiduciary Care Partners"
                  className="h-full w-full object-cover object-[center_20%] grayscale-[15%] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bottle/40 via-transparent to-bottle/10 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <p className="font-sans text-cream/80 leading-relaxed text-base md:text-lg">
                Echelon Fiduciary Care Partners was formed at the intersection of elite
                institutional training and frontline clinical mastery—purpose-built for the
                fiduciary class managing estates where cognitive decline, family fracture, and
                litigation risk converge.
              </p>
              <p className="font-sans text-cream/65 leading-relaxed">
                Our practice brings together the disciplined analytical rigor of a top-tier
                liberal arts education with the specialized clinical competencies required to
                navigate complex psychosocial landscapes under judicial and trustee scrutiny.
                We do not offer generic care coordination; we deliver objective, defensible
                clinical intelligence that protects your clients, your trustees, and your
                professional standing.
              </p>
            </div>

            <div className="space-y-0 border-t border-champagne/20">
              {education.map((item, index) => (
                <div
                  key={item.institution}
                  className={`py-6 md:py-8 ${
                    index < education.length - 1 ? 'border-b border-champagne/15' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-serif text-xl md:text-2xl text-cream">
                      {item.institution}
                    </h3>
                    {item.location && (
                      <span className="font-sans text-sm text-champagne/80">{item.location}</span>
                    )}
                    {item.degree && (
                      <span className="font-sans text-sm text-champagne">{item.degree}</span>
                    )}
                  </div>
                  <p className="font-sans text-sm text-cream/55 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
