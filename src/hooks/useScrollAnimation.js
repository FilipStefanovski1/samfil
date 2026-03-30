import { useEffect, useRef, useState } from 'react'

/**
 * Triggers a visible state when the element enters the viewport.
 * Use with Tailwind transition classes for scroll-triggered animations.
 *
 * @param {number} threshold - How much of the element must be visible (0–1)
 * @returns {[React.RefObject, boolean]} - [ref to attach, isVisible]
 */
export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [threshold])

  return [ref, isVisible]
}
