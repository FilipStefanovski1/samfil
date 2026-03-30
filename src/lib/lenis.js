import Lenis from 'lenis'
import { gsap } from './gsap'
import { ScrollTrigger } from './gsap'

let instance = null

export function initLenis() {
  instance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  })

  // Keep ScrollTrigger in sync with Lenis
  instance.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    instance.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return instance
}

export function getLenis() {
  return instance
}
