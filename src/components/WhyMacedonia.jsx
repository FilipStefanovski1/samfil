import { DollarSign, Clock, Globe, BookOpen, Zap, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const reasons = [
  {
    icon: DollarSign,
    title: '3–5× cost efficiency',
    description:
      'Skilled professionals in North Macedonia earn a fraction of their Nordic and Benelux counterparts — without any reduction in quality or professionalism.',
  },
  {
    icon: Clock,
    title: 'Same time zone',
    description:
      'UTC+1 means your Macedonian team starts and ends their day in sync with your office in Amsterdam, Stockholm, or Copenhagen.',
  },
  {
    icon: Globe,
    title: 'EU candidate country',
    description:
      'North Macedonia is on a clear EU accession path. Business culture, legal standards, and professional expectations align closely with the European Union.',
  },
  {
    icon: BookOpen,
    title: 'Strong English & technical skills',
    description:
      'English proficiency is high across IT, finance, and business services. Technical education is growing fast, with a strong university base.',
  },
  {
    icon: Zap,
    title: 'Skilled & growing ecosystem',
    description:
      'A maturing hub for software development, BPO, and professional services — with a growing pool of experienced practitioners and agencies.',
  },
  {
    icon: Users,
    title: 'Cultural proximity to Europe',
    description:
      'European values, a similar work ethic, and a clear orientation toward Western business practices make collaboration natural and productive.',
  },
]

export default function WhyMacedonia() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
            The location
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Why North Macedonia?
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            One of Europe's best-kept nearshoring destinations — skilled, affordable,
            culturally aligned, and operating in your time zone.
          </p>
        </div>

        {/* Reasons grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`bg-white rounded-xl p-6 border border-cream-dark hover:shadow-md transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
