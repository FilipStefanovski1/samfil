import { useLayoutEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { COMPANY } from '../constants/content'

const line1Words = ['Scale', 'operations']
const line2Words = ['without', 'scaling', 'costs.']

const trustBullets = [
  'EU-aligned execution',
  'Fully managed, end to end',
  'No offshore surprises',
]

export default function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Badge
      tl.fromTo('.hero-badge',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        0.15
      )

      // H1 words — slide up from overflow-hidden parent
      tl.fromTo('.gsap-word',
        { yPercent: 110 },
        { yPercent: 0, duration: 1.0, stagger: 0.06 },
        0.3
      )

      // Subheadline
      tl.fromTo('.hero-sub',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.55'
      )

      // CTA buttons
      tl.fromTo('.hero-cta',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1 },
        '-=0.45'
      )

      // Trust bullets
      tl.fromTo('.hero-trust-item',
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 },
        '-=0.3'
      )

      // Subtle parallax on dot grid as user scrolls
      gsap.to('.hero-dots', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden">

      {/* Dot grid with parallax */}
      <div
        className="hero-dots absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3.5 py-1.5 rounded-full mb-8 opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
            Nearshoring Partner · Nordic &amp; Benelux
          </div>

          {/* Headline — word-split */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            {/* Line 1 */}
            <span className="block">
              {line1Words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: 'bottom' }}
                >
                  <span className="gsap-word inline-block text-white">
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </span>
            {/* Line 2 — blue accent */}
            <span className="block">
              {line2Words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: 'bottom' }}
                >
                  <span className="gsap-word inline-block text-blue-400">
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub text-lg lg:text-xl text-white/65 leading-relaxed max-w-2xl mb-10 opacity-0">
            NordBridge connects companies in Nordic and Benelux markets with vetted service
            providers in North Macedonia — managing every step of the process so you can
            focus on what matters.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={COMPANY.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-700/30 group opacity-0"
            >
              Book a Discovery Call
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="hero-cta inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/85 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-white/5 opacity-0"
            >
              See Our Services
            </a>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {trustBullets.map((item) => (
              <span
                key={item}
                className="hero-trust-item flex items-center gap-2 text-white/55 text-sm opacity-0"
              >
                <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  )
}
