import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initRevealAnimations, initParallaxAnimations } from '../plugin/animations/animation'

gsap.registerPlugin(ScrollTrigger)

//  ---------------------- Smooth Scroll (JS) ---------------------- //
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  normalizeWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')

setTimeout(() => {
  initRevealAnimations()
  initParallaxAnimations()
}, 200)
