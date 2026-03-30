import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { HOW_IT_WORKS_STEPS, COMPANY } from '../constants/content'
import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <section id="how-it-works" className="dark-gradient py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            The process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            A managed process,
            <br />
            from first call to long-term results.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            We don't hand you off after the intro. Every step is owned, managed,
            and accountable — by us.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16"
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.number}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`relative transition-all duration-700 ${
                stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Step number — large ghost text */}
              <div className="text-7xl lg:text-8xl font-bold text-white/[0.07] leading-none mb-3 select-none">
                {step.number}
              </div>

              {/* Step indicator dot + title */}
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

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`border-t border-white/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Ready to start?
            </p>
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
