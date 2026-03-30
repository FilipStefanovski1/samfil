import { useLayoutEffect, useRef } from 'react'
import { TrendingUp, Users, AlertTriangle, Layers } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'

const painPoints = [
  {
    icon: TrendingUp,
    title: 'Rising labour costs',
    description:
      'Salaries for skilled roles in Sweden, the Netherlands, and Denmark continue to climb. Scaling your local team means significantly higher fixed costs — year on year.',
  },
  {
    icon: Users,
    title: 'Talent shortages',
    description:
      'Finding experienced developers, support professionals, or finance staff locally is harder and slower than ever. Vacancies stay open longer. Projects slip.',
  },
  {
    icon: AlertTriangle,
    title: 'Offshore frustrations',
    description:
      'Traditional outsourcing to Asia brings timezone friction, inconsistent quality, and communication gaps. You end up managing problems you hired to avoid.',
  },
  {
    icon: Layers,
    title: 'Complexity without support',
    description:
      'Managing international vendors on your own requires time, expertise, and trust that takes years to build — in markets you may not fully understand.',
  },
]

export default function Problem() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      // Section label
      gsap.fromTo('.problem-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      // Heading words
      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.05, scrollTrigger: st }
      )

      // Sub text
      gsap.fromTo('.problem-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { ...st, start: 'top 75%' } }
      )

      // Pain point cards — stagger reveal
      gsap.fromTo('.pain-card',
        { opacity: 0, y: 44, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.pain-grid', start: 'top 80%' },
        }
      )

      // Transition block
      gsap.fromTo('.problem-transition',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.problem-transition', start: 'top 85%' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <p className="problem-label text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
            The challenge
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {splitWords('The real cost of getting operations wrong')}
          </h2>
          <p className="problem-sub text-slate-500 text-lg leading-relaxed opacity-0">
            Labour costs in Nordic and Benelux markets are rising. Local talent is scarce.
            And traditional offshore outsourcing often creates more problems than it solves.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="pain-grid grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="pain-card flex gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 opacity-0"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Icon size={18} className="text-slate-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{point.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Transition */}
        <div className="problem-transition border-t border-slate-100 pt-10 opacity-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-1">
              <p className="text-xl font-semibold text-slate-900 mb-1">
                Nearshoring changes this equation.
              </p>
              <p className="text-slate-500">
                But only when it's done with the right partner — one who manages the process
                and stays accountable for the outcome.
              </p>
            </div>
            <a
              href="#how-it-works"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              See how we work
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
