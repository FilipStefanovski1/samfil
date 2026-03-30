import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { TRUST_POINTS } from '../constants/content'
import { CheckCircle2 } from 'lucide-react'

export default function TrustSection() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Heading + explanation */}
          <div
            ref={headingRef}
            className={`transition-all duration-700 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
              Our commitment
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Outsourcing done differently.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Most outsourcing problems are trust problems. Misaligned expectations,
              poor communication, no accountability. We're built around solving that —
              from the very first conversation.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We operate as a managed partner, not a marketplace. That means fewer surprises,
              better outcomes, and a relationship that actually improves over time.
            </p>

            {/* Comparison note */}
            <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                NordBridge vs. typical outsourcing
              </p>
              <div className="space-y-2.5">
                {[
                  ['Vetted, curated providers', 'Random public directories'],
                  ['Ongoing managed relationship', 'One-time introduction fee'],
                  ['Western-style communication', 'Language & cultural friction'],
                  ['Quality accountability', 'You manage it yourself'],
                ].map(([us, them]) => (
                  <div key={us} className="grid grid-cols-2 gap-3 text-sm">
                    <span className="text-slate-700 font-medium">✓ {us}</span>
                    <span className="text-slate-400 line-through decoration-slate-300">{them}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Trust points */}
          <div
            ref={contentRef}
            className="space-y-5"
          >
            {TRUST_POINTS.map((point, index) => (
              <div
                key={point.label}
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-500 ${
                  contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
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
