import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveal animation (already in your code, kept as is)
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
 * NEW: Parallax animation
 */
export const initParallaxAnimations = () => {
  const wrappers = gsap.utils.toArray('[data-parallax]')

  wrappers.forEach((wrap) => {
    const img = wrap.querySelector('img')
    if (!img) return

    gsap.set(img, {
      yPercent: -20, // start position
      opacity: 1,
      force3D: true,
      willChange: 'transform',
    })

    gsap.to(img, {
      yPercent: 20, // animate down
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
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
