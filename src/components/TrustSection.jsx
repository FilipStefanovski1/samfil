import { useLayoutEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'
import { TRUST_POINTS } from '../constants/content'

export default function TrustSection() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.trust-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.05, scrollTrigger: st }
      )

      gsap.fromTo('.trust-body-text',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
          scrollTrigger: { ...st, start: 'top 75%' } }
      )

      // Comparison box slides up from below
      gsap.fromTo('.trust-comparison',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.trust-comparison', start: 'top 85%' } }
      )

      // Right column: items slide in from right
      gsap.fromTo('.trust-point',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0,
          duration: 0.75, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.trust-points', start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="trust-label text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
              Our commitment
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              {splitWords('Outsourcing done differently.')}
            </h2>
            <p className="trust-body-text text-slate-500 text-lg leading-relaxed mb-4 opacity-0">
              Most outsourcing problems are trust problems. Misaligned expectations,
              poor communication, no accountability. We're built around solving that —
              from the very first conversation.
            </p>
            <p className="trust-body-text text-slate-500 leading-relaxed opacity-0">
              We operate as a managed partner, not a marketplace. That means fewer surprises,
              better outcomes, and a relationship that actually improves over time.
            </p>

            <div className="trust-comparison mt-8 p-5 rounded-xl bg-slate-50 border border-slate-100 opacity-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                NordBridge vs. typical outsourcing
              </p>
              <div className="space-y-2.5">
                {[
                  ['Vetted, curated providers',     'Random public directories'],
                  ['Ongoing managed relationship',  'One-time introduction fee'],
                  ['Western-style communication',   'Language & cultural friction'],
                  ['Quality accountability',        'You manage it yourself'],
                ].map(([us, them]) => (
                  <div key={us} className="grid grid-cols-2 gap-3 text-sm">
                    <span className="text-slate-700 font-medium">✓ {us}</span>
                    <span className="text-slate-400 line-through decoration-slate-300">{them}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="trust-points space-y-5">
            {TRUST_POINTS.map((point) => (
              <div
                key={point.label}
                className="trust-point flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 opacity-0"
              >
                <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{point.label}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
