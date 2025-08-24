import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

// Read delay from the element via multiple conventions
function readDelay(el) {
  // 1) data-delay (seconds)
  const d = el.getAttribute('data-delay')
  if (d != null && d !== '') return parseFloat(d) || 0

  // 2) data-delay-ms (milliseconds)
  const dms = el.getAttribute('data-delay-ms')
  if (dms != null && dms !== '') return (parseInt(dms, 10) || 0) / 1000

  // 3) attribute like delay-300, delay-750ms, delay-0.8s
  const attr = Array.from(el.attributes).find((a) => /^delay-(\d+(\.\d+)?)(ms|s)?$/.test(a.name))
  if (attr) {
    const m = attr.name.match(/^delay-(\d+(\.\d+)?)(ms|s)?$/)
    const val = parseFloat(m[1]) || 0
    const unit = m[3] || 'ms' // default to ms if unit omitted
    return unit === 's' ? val : val / 1000
  }

  return 0
}

/**
 * Reveal animation
 */
export const initRevealAnimations = () => {
  const imgs = gsap.utils.toArray('[data-open]')

  imgs.forEach((img) => {
    const wrap = img.closest('.reveal-wrap')
    if (!wrap) return

    gsap.set(img, {
      clipPath: 'inset(0% 0% 100% 0%)',
      opacity: 1,
      force3D: true,
    })

    gsap.to(img, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.5,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: wrap,
        start: 'top 50%',
        once: true,
      },
    })
  })
}

/**
 * Parallax animation
 */
export const initParallaxAnimations = () => {
  const wrappers = gsap.utils.toArray('[data-parallax]')

  wrappers.forEach((wrap) => {
    const img = wrap.querySelector('img')
    if (!img) return

    gsap.set(img, {
      yPercent: -25, // start position
      opacity: 1,
      force3D: true,
      willChange: 'transform',
    })

    gsap.to(img, {
      yPercent: 25, // animate down
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        scrub: 1.5,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
  })
}

/**
 * Body Text Animation
 */

export const initBodyTextAnimation = () => {
  const targets = gsap.utils.toArray('[animate-2]')

  targets.forEach((el) => {
    if (el.__animatedtext) return

    // Split into words
    const split = new SplitText(el, { type: 'words' })

    // Initial state
    gsap.set(split.words, {
      display: 'inline-block',
      opacity: 0,
      y: 12,
      filter: 'blur(6px)',
      willChange: 'opacity, transform, filter',
    })

    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.6,
      delay: readDelay(el),
      ease: 'power2.out',
      stagger: { each: 0.06, from: 0 },
      clearProps: 'transform,filter',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    })
  })
}

/**
 * Heading Text Animation
 */
export const initHeadingTextAnimation = () => {
  const targets = gsap.utils.toArray('[animate]')

  targets.forEach((el) => {
    if (el.__animatedtext) return

    gsap.set(el, { overflow: 'hidden' })

    const split = new SplitText(el, { type: 'lines' })

    gsap.set(split.lines, {
      opacity: 0,
      y: 16,
      willChange: 'opacity, transform',
    })

    gsap.to(split.lines, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: readDelay(el),
      ease: 'power2.out',
      stagger: { each: 0.06, from: 0 },
      clearProps: 'transform',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
        markers: true,
      },
    })

    el.__animatedtext = true
  })
}

/**
 * Zoom Animation WIP
 */
export const initZoomAnimations = () => {
  const sections = gsap.utils.toArray('[data-zoom]')

  sections.forEach((section) => {
    const img = section.querySelector('img')
    if (!img) return

    gsap.set(img, {
      scale: 0.8,
      transformOrigin: 'center center',
      willChange: 'transform',
      force3D: true,
    })

    gsap.to(img, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 2.2,
        markers: true,
      },
    })
  })
}

/**
 * Cleanup — kills ALL ScrollTriggers
 */
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((st) => st.kill())
}
