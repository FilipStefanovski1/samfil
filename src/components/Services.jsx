import { Code2, Headphones, Calculator, Check, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SERVICE_VERTICALS, COMPANY } from '../constants/content'

const iconMap = { Code2, Headphones, Calculator }

const cardAccents = [
  { bg: 'bg-blue-700', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
  { bg: 'bg-slate-800', light: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-100' },
  { bg: 'bg-indigo-700', light: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100' },
]

export default function Services() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
            What we offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Three service verticals.
            <br />
            One managed process.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Whether you need technical capacity, operational support, or financial expertise —
            we source the right partner and manage the full engagement.
          </p>
        </div>

        {/* Service cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {SERVICE_VERTICALS.map((service, index) => {
            const Icon = iconMap[service.icon]
            const accent = cardAccents[index]
            return (
              <div
                key={service.id}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`flex flex-col rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Card header */}
                <div className={`${accent.bg} px-7 pt-8 pb-7`}>
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-5">
                    {Icon && <Icon size={20} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.positioning}
                  </p>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-7 bg-white">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

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

                  <div className={`text-xs ${accent.text} font-medium bg-opacity-60 ${accent.light} border ${accent.border} rounded-lg px-4 py-3 mb-6`}>
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
