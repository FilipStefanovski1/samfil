import { Shield, Globe, Eye, Award, Layers } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { WHY_US_POINTS } from '../constants/content'

// Lucide icon map — fallback to Shield if undefined
const iconMap = { Shield, Globe, Eye, Award, Layers }

// Handshake isn't always in older lucide-react — use a fallback
function HandshakeIcon({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
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
  const [headingRef, headingVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()

  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Why NordBridge
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight max-w-xl">
              Not an agency. Not a directory.
              <br />
              A managed partner.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              We don't just make introductions. We manage the relationship and stay
              accountable for the outcome.
            </p>
          </div>
        </div>

        {/* Differentiators grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_US_POINTS.map((point, index) => {
            const Icon = getIcon(point.icon)
            return (
              <div
                key={point.title}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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
