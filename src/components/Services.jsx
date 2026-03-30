import { useLayoutEffect, useRef } from 'react'
import { Code2, Headphones, Calculator, Check, ArrowRight } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'
import { SERVICE_VERTICALS, COMPANY } from '../constants/content'

const iconMap = { Code2, Headphones, Calculator }

const cardAccents = [
  { bg: 'bg-blue-700',   light: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-100' },
  { bg: 'bg-slate-800',  light: 'bg-slate-50',  text: 'text-slate-700',  border: 'border-slate-100' },
  { bg: 'bg-indigo-700', light: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100' },
]

export default function Services() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.svc-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.05, scrollTrigger: st }
      )

      gsap.fromTo('.svc-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 75%' } }
      )

      // Service cards: clip-path + y for a premium "painting in" feel
      gsap.fromTo('.svc-card',
        { opacity: 0, y: 70, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1.0, ease: 'power3.out', stagger: 0.18,
          scrollTrigger: { trigger: '.svc-grid', start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <p className="svc-label text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
            What we offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2">
            {splitWords('Three service verticals.')}
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {splitWords('One managed process.')}
          </h2>
          <p className="svc-sub text-slate-500 text-lg leading-relaxed opacity-0">
            Whether you need technical capacity, operational support, or financial expertise —
            we source the right partner and manage the full engagement.
          </p>
        </div>

        <div className="svc-grid grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICE_VERTICALS.map((service, index) => {
            const Icon = iconMap[service.icon]
            const accent = cardAccents[index]
            return (
              <div
                key={service.id}
                className="svc-card flex flex-col rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-400 opacity-0"
              >
                <div className={`${accent.bg} px-7 pt-8 pb-7`}>
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-5">
                    {Icon && <Icon size={20} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.positioning}</p>
                </div>

                <div className="flex flex-col flex-1 p-7 bg-white">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    What's included
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={14} className={`${accent.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`text-xs ${accent.text} font-medium ${accent.light} border ${accent.border} rounded-lg px-4 py-3 mb-6`}>
                    {service.why}
                  </div>
                  <a
                    href={COMPANY.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 group transition-colors"
                  >
                    {service.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
