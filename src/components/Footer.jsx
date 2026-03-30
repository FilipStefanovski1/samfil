import { Mail, Linkedin } from 'lucide-react'
import { COMPANY, NAV_LINKS, SERVICE_VERTICALS } from '../constants/content'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-16">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-blue-700 flex items-center justify-center flex-shrink-0">
                <div className="w-3.5 h-3.5 border-2 border-white rounded-sm opacity-90" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-[200px]">
              {COMPANY.description}
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all"
                aria-label="NordBridge on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all"
                aria-label="Email NordBridge"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {SERVICE_VERTICALS.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  Book a discovery call
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            North Macedonia · Serving Nordic &amp; Benelux markets
          </p>
        </div>

      </div>
    </footer>
  )
}
