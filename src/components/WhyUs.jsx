import { useLayoutEffect, useRef } from 'react'
import { Shield, Globe, Eye, Award, Layers } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'
import { WHY_US_POINTS } from '../constants/content'

const iconMap = { Shield, Globe, Eye, Award, Layers }

function HandshakeIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
      <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3l3.13 3.14 3.13-3.14a2.13 2.13 0 0 0 0-3L12 5.36z" />
    </svg>
  )
}

function getIcon(name) {
  if (name === 'Handshake') return HandshakeIcon
  return iconMap[name] || Shield
}

export default function WhyUs() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.whu-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.05, scrollTrigger: st }
      )

      gsap.fromTo('.whu-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 74%' } }
      )

      // Cards — alternating left/right for visual interest
      gsap.fromTo('.whu-card',
        { opacity: 0, y: 38, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75, ease: 'power3.out', stagger: { amount: 0.5, from: 'start' },
          scrollTrigger: { trigger: '.whu-grid', start: 'top 82%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="why-us" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <p className="whu-label text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
            Why NordBridge
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight max-w-xl">
              {splitWords('Not an agency. Not a directory.')}
              <br />
              {splitWords('A managed partner.')}
            </h2>
            <p className="whu-sub text-slate-500 text-base leading-relaxed max-w-sm opacity-0">
              We don't just make introductions. We manage the relationship and stay
              accountable for the outcome.
            </p>
          </div>
        </div>

        <div className="whu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_POINTS.map((point) => {
            const Icon = getIcon(point.icon)
            return (
              <div
                key={point.title}
                className="whu-card p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 opacity-0"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
