import { useLayoutEffect, useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'
import { COMPANY } from '../constants/content'

export default function CTASection() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.cta-label',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.055, scrollTrigger: st }
      )

      gsap.fromTo('.cta-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 75%' } }
      )

      // Button scales up slightly on entrance
      gsap.fromTo('.cta-btn',
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'back.out(1.4)',
          scrollTrigger: { ...st, start: 'top 73%' } }
      )

      gsap.fromTo('.cta-email',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 70%' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="dark-gradient py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          <p className="cta-label text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 opacity-0">
            Ready when you are
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {splitWords('Ready to explore what')}
            <br />
            {splitWords('nearshoring can do for you?')}
          </h2>

          <p className="cta-sub text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto opacity-0">
            Book a 30-minute discovery call. No commitment, no pressure — just a clear
            conversation about whether NordBridge is the right fit for your business.
          </p>

          <a
            href={COMPANY.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg group mb-6 opacity-0"
          >
            Book a Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="cta-email flex items-center justify-center gap-2 text-white/45 text-sm opacity-0">
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
