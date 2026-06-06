import { useEffect, useRef } from 'react'

export const useFadeIn = (options = {}) => {
  const { threshold = 0.15, once = true } = options
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return undefined
    }

    // Marks the element as visible when it enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        element.classList.add('visible')

        // Stops observing after first reveal when once=true.
        if (once) {
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, once])

  return ref
}
