import { useLayoutEffect, useRef } from 'react'
import { DollarSign, Clock, Globe, BookOpen, Zap, Users } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/splitWords.jsx'

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
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 78%' }

      gsap.fromTo('.mk-label',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: st }
      )

      gsap.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.05, scrollTrigger: st }
      )

      gsap.fromTo('.mk-sub',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { ...st, start: 'top 75%' } }
      )

      // Cards stagger with slight clip reveal feel (y + scale)
      gsap.fromTo('.mk-card',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8, ease: 'power3.out', stagger: { amount: 0.55, from: 'start' },
          scrollTrigger: { trigger: '.mk-grid', start: 'top 82%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <p className="mk-label text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3 opacity-0">
            The location
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {splitWords('Why North Macedonia?')}
          </h2>
          <p className="mk-sub text-slate-500 text-lg leading-relaxed opacity-0">
            One of Europe's best-kept nearshoring destinations — skilled, affordable,
            culturally aligned, and operating in your time zone.
          </p>
        </div>

        <div className="mk-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="mk-card bg-white rounded-xl p-6 border border-cream-dark hover:shadow-md transition-shadow duration-300 opacity-0"
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
