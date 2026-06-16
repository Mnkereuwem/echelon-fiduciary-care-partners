import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Profiles', href: '#sectors' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bottle/95 backdrop-blur-md border-b border-champagne/20 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a
          href="#"
          className="font-serif text-[0.65rem] sm:text-xs md:text-sm font-semibold tracking-ultra text-cream leading-snug max-w-[200px] sm:max-w-none hover:text-champagne transition-colors duration-300"
        >
          ECHELON FIDUCIARY CARE PARTNERS
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-cream/80 hover:text-champagne transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs px-6 py-2.5">
            Request Consultation
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-champagne transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-champagne transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-champagne transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-bottle-dark/98 backdrop-blur-lg transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 py-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-serif text-2xl text-cream hover:text-champagne transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-primary mt-4">
            Request Consultation
          </a>
        </nav>
      </div>
    </header>
  )
}
