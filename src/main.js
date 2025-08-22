import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

//  ---------------------- Smooth Scroll (JS) ---------------------- //
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Simplified easing
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false, // Disable on touch devices for better performance
  touchMultiplier: 2,
  infinite: false,
  // Add these performance options:
  lerp: 0.1, // Linear interpolation for smoother movement
  wheelMultiplier: 1,
  touchMultiplier: 2,
  normalizeWheel: true
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const app = createApp(App)
app.use(MotionPlugin)

app.use(router)

app.mount('#app')
