import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { STATS } from '../constants/content'

export default function StatsStrip() {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section className="bg-white border-b border-slate-100">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100"
      >
        {STATS.map((stat, index) => (
          <div
            key={stat.value}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`text-center lg:px-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
