import { useState } from 'react'

const CONTACT_EMAIL = 'mikenkereuwem1@gmail.com'
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const initialForm = {
  name: '',
  title: '',
  email: '',
  phone: '',
  context: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Echelon Med Legal — New Consultation Inquiry',
          _template: 'table',
          _captcha: 'false',
          _replyto: form.email,
          name: form.name,
          professional_title: form.title,
          email: form.email,
          phone: form.phone || 'Not provided',
          case_context: form.context,
        }),
      })

      const data = await response.json()

      if (!response.ok || data.success !== 'true') {
        throw new Error(data.message || 'Submission failed')
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError(
        'We could not send your inquiry. Please try again or email us directly at mikenkereuwem1@gmail.com.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative border-t border-champagne/15">
      <div className="absolute inset-0 bg-gradient-to-t from-bottle-dark to-transparent pointer-events-none" />
      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="section-label">Partnership Inquiry</p>
            <h2 className="section-title mb-6">Build Your California QME Practice</h2>
            <p className="font-sans text-cream/65 leading-relaxed max-w-md">
              Physicians, law firms, and claims professionals may submit an inquiry below. A
              member of our team will respond within one business day.
            </p>
            <div className="mt-12 hidden lg:block">
              <div className="w-px h-32 bg-champagne/30" />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="gold-border p-10 md:p-12 text-center animate-fade-in">
                <p className="font-serif text-2xl text-champagne mb-4">Inquiry Received</p>
                <p className="font-sans text-cream/70 text-sm leading-relaxed">
                  Thank you for your interest. We will be in touch shortly to discuss your case
                  context.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <p className="font-sans text-sm text-red-300/90 border border-red-400/30 bg-red-950/20 px-4 py-3">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-cream/50 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={loading}
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-bottle-light/50 border border-champagne/25 px-4 py-3 text-cream font-sans text-sm placeholder:text-cream/30 focus:outline-none focus:border-champagne/60 transition-colors disabled:opacity-60"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block font-sans text-xs uppercase tracking-widest text-cream/50 mb-2">
                      Professional Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      disabled={loading}
                      value={form.title}
                      onChange={handleChange}
                      className="w-full bg-bottle-light/50 border border-champagne/25 px-4 py-3 text-cream font-sans text-sm placeholder:text-cream/30 focus:outline-none focus:border-champagne/60 transition-colors disabled:opacity-60"
                      placeholder="Psychiatrist, Physician, Attorney…"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-cream/50 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={loading}
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-bottle-light/50 border border-champagne/25 px-4 py-3 text-cream font-sans text-sm placeholder:text-cream/30 focus:outline-none focus:border-champagne/60 transition-colors disabled:opacity-60"
                      placeholder="professional@firm.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-widest text-cream/50 mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled={loading}
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-bottle-light/50 border border-champagne/25 px-4 py-3 text-cream font-sans text-sm placeholder:text-cream/30 focus:outline-none focus:border-champagne/60 transition-colors disabled:opacity-60"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="context" className="block font-sans text-xs uppercase tracking-widest text-cream/50 mb-2">
                    Partnership Context
                  </label>
                  <textarea
                    id="context"
                    name="context"
                    rows={5}
                    required
                    disabled={loading}
                    value={form.context}
                    onChange={handleChange}
                    className="w-full bg-bottle-light/50 border border-champagne/25 px-4 py-3 text-cream font-sans text-sm placeholder:text-cream/30 focus:outline-none focus:border-champagne/60 transition-colors resize-none disabled:opacity-60"
                    placeholder="Tell us about your QME practice, coverage needs, or administrative requirements…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
