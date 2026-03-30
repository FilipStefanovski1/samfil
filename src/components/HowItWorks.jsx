import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'
import { HOW_IT_WORKS_STEPS, COMPANY } from '../constants/content'

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.hiw-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.055, scrollTrigger: st }
      )

      gsap.fromTo('.hiw-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 75%' } }
      )

      // Steps: left-to-right stagger with x offset (feels directional)
      gsap.fromTo('.hiw-step',
        { opacity: 0, y: 40, x: 15 },
        {
          opacity: 1, y: 0, x: 0,
          duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.hiw-steps', start: 'top 80%' },
        }
      )

      // Step number ghost — fade in separately for emphasis
      gsap.fromTo('.step-number',
        { opacity: 0 },
        {
          opacity: 1, duration: 1.2, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: '.hiw-steps', start: 'top 80%' },
        }
      )

      gsap.fromTo('.hiw-cta-block',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.hiw-cta-block', start: 'top 88%' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="dark-gradient py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <p className="hiw-label text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
            The process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
            {splitWords('A managed process,')}
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {splitWords('from first call to long-term results.')}
          </h2>
          <p className="hiw-sub text-white/55 text-lg leading-relaxed opacity-0">
            We don't hand you off after the intro. Every step is owned, managed,
            and accountable — by us.
          </p>
        </div>

        <div className="hiw-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.number} className="hiw-step opacity-0">
              {/* Large ghost number */}
              <div className="step-number text-7xl lg:text-8xl font-bold text-white/[0.06] leading-none mb-3 select-none opacity-0">
                {step.number}
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed pl-4 border-l border-white/10">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="hiw-cta-block border-t border-white/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 opacity-0">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Ready to start?</p>
            <p className="text-white/50 text-sm">
              Book a 30-minute discovery call — no commitment, no pressure.
            </p>
          </div>
          <a
            href={COMPANY.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors group"
          >
            Book a Discovery Call
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
