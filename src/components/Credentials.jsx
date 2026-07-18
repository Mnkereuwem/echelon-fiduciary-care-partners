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
      'Undergraduate study developing disciplined analytical frameworks and clear, objective communication—reinforced through the sustained performance demands of varsity athletics.',
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
          <p className="section-label">About Our Platform</p>
          <h2 className="section-title">Operational Discipline. Physician Independence.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-champagne/30" />
              <div className="absolute -inset-6 border border-champagne/15" />
              <div className="relative h-full w-full bg-bottle-light gold-border overflow-hidden">
                <img
                  src="/headshot.png"
                  alt="Founder, Echelon Med Legal"
                  className="h-full w-full object-cover object-[center_20%] grayscale-[15%] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bottle/40 via-transparent to-bottle/10 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <p className="font-sans text-cream/80 leading-relaxed text-base md:text-lg">
                Echelon Med Legal is focused on partnering with psychiatrists and other
                physicians who want to build or expand a California QME practice. We provide
                the physical offices, administrative staffing, document coordination, and
                operational systems required to manage QME panel work at scale.
              </p>
              <p className="font-sans text-cream/65 leading-relaxed">
                Our team handles the non-clinical workflow surrounding QME panels, including
                court and legal document administration, record organization, scheduling,
                deadlines, billing support, and approved physician logistics. The evaluating
                doctor retains complete control over every examination, clinical finding,
                medical opinion, and report conclusion.
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
