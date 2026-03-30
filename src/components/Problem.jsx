import { TrendingUp, Users, AlertTriangle, Layers } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

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
  const [headingRef, headingVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  const [transitionRef, transitionVisible] = useScrollAnimation()

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section label + heading */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
            The challenge
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            The real cost of getting operations wrong
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Labour costs in Nordic and Benelux markets are rising. Local talent is scarce.
            And traditional offshore outsourcing often creates more problems than it solves.
          </p>
        </div>

        {/* Pain point cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`flex gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
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

        {/* Transition to solution */}
        <div
          ref={transitionRef}
          className={`border-t border-slate-100 pt-10 transition-all duration-700 ${
            transitionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
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
