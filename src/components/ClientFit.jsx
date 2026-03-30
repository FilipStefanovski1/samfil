import { Cpu, ShoppingBag, Briefcase, Calculator, Building2, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CLIENT_TYPES, COMPANY } from '../constants/content'

const iconMap = { Cpu, ShoppingBag, Briefcase, Calculator, Building2, Users }

export default function ClientFit() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <section id="clients" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Who we work with
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Built for companies like yours.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            If any of these sound like your team, NordBridge is probably a good fit.
            We work with companies at different stages — what they share is a need for
            reliable, managed capacity.
          </p>
        </div>

        {/* Client type cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {CLIENT_TYPES.map((client, index) => {
            const Icon = iconMap[client.icon]
            return (
              <div
                key={client.title}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`flex items-start gap-4 p-5 bg-white rounded-xl border border-cream-dark hover:shadow-md hover:border-slate-200 transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
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

        {/* Self-identification CTA */}
        <div
          ref={ctaRef}
          className={`bg-white rounded-2xl border border-slate-100 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
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
