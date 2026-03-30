import { useLayoutEffect, useRef } from 'react'
import { Cpu, ShoppingBag, Briefcase, Calculator, Building2, Users } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'
import { CLIENT_TYPES, COMPANY } from '../constants/content'

const iconMap = { Cpu, ShoppingBag, Briefcase, Calculator, Building2, Users }

export default function ClientFit() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.cf-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.05, scrollTrigger: st }
      )

      gsap.fromTo('.cf-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 75%' } }
      )

      gsap.fromTo('.cf-card',
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, ease: 'power3.out', stagger: { amount: 0.45, from: 'start' },
          scrollTrigger: { trigger: '.cf-grid', start: 'top 82%' },
        }
      )

      gsap.fromTo('.cf-bottom',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.cf-bottom', start: 'top 88%' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="clients" ref={sectionRef} className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <p className="cf-label text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
            Who we work with
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {splitWords('Built for companies like yours.')}
          </h2>
          <p className="cf-sub text-slate-500 text-lg leading-relaxed opacity-0">
            If any of these sound like your team, NordBridge is probably a good fit.
            We work with companies at different stages — what they share is a need for
            reliable, managed capacity.
          </p>
        </div>

        <div className="cf-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {CLIENT_TYPES.map((client) => {
            const Icon = iconMap[client.icon]
            return (
              <div
                key={client.title}
                className="cf-card flex items-start gap-4 p-5 bg-white rounded-xl border border-cream-dark hover:shadow-md hover:border-slate-200 transition-all duration-300 opacity-0"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center">
                  {Icon && <Icon size={16} className="text-slate-500" />}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{client.title}</h3>
                  <p className="text-slate-500 text-sm leading-snug">{client.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="cf-bottom bg-white rounded-2xl border border-slate-100 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0">
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-lg mb-1">
              Not sure if we're the right fit?
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Book a short discovery call. No commitment — just an honest conversation about
              whether NordBridge makes sense for your situation.
            </p>
          </div>
          <a
            href={COMPANY.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  )
}
