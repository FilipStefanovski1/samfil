import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Global ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none none',
})

export { gsap, ScrollTrigger }
