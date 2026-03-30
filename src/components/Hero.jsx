import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '../constants/content'

const trustBullets = [
  'EU-aligned execution',
  'Fully managed, end to end',
  'No offshore surprises',
]

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden">

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3.5 py-1.5 rounded-full mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
            Nearshoring Partner · Nordic &amp; Benelux
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-up">
            Scale operations
            <br />
            <span className="text-blue-400">without scaling costs.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/65 leading-relaxed max-w-2xl mb-10 animate-fade-up animate-delay-100">
            NordBridge connects companies in Nordic and Benelux markets with vetted service
            providers in North Macedonia — managing every step of the process so you can
            focus on what matters.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up animate-delay-200">
            <a
              href={COMPANY.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-700/30 group"
            >
              Book a Discovery Call
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/85 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              See Our Services
            </a>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 animate-fade-up animate-delay-300">
            {trustBullets.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-white/55 text-sm"
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
