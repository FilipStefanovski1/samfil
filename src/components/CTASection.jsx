import { ArrowRight, Mail } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { COMPANY } from '../constants/content'

export default function CTASection() {
  const [ref, isVisible] = useScrollAnimation(0.15)

  return (
    <section id="contact" className="dark-gradient py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Label */}
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Ready when you are
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to explore what
            <br />
            nearshoring can do for you?
          </h2>

          {/* Sub */}
          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a 30-minute discovery call. No commitment, no pressure — just a clear
            conversation about whether NordBridge is the right fit for your business.
          </p>

          {/* Primary CTA */}
          <a
            href={COMPANY.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg group mb-6"
          >
            Book a Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Email fallback */}
          <div className="flex items-center justify-center gap-2 text-white/45 text-sm">
            <Mail size={14} />
            <span>
              Prefer email?{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
              >
                {COMPANY.email}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
