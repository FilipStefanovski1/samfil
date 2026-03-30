import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../constants/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="NordBridge home">
            <div className="w-7 h-7 rounded-md bg-blue-700 flex items-center justify-center flex-shrink-0">
              <div className="w-3.5 h-3.5 border-2 border-white rounded-sm opacity-90" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {COMPANY.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={COMPANY.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-slate-100`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-slate-700 hover:text-slate-900 font-medium py-2.5 text-sm border-b border-slate-50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={COMPANY.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-3 inline-flex justify-center items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
          >
            Book a Discovery Call
          </a>
        </nav>
      </div>
    </header>
  )
}
