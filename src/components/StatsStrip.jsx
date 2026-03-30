import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { STATS } from '../constants/content'

export default function StatsStrip() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100">
        {STATS.map((stat) => (
          <div
            key={stat.value}
            className="stat-item text-center lg:px-8 opacity-0"
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
