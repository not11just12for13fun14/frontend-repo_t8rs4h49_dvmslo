import { useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const ctaRef = useRef(null)

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">      
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(70,0,120,0.35),transparent_60%),_radial-gradient(60%_60%_at_80%_10%,rgba(0,220,255,0.12),transparent_70%)]" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_20px_6px_rgba(244,63,94,0.6)]" />
              <span className="text-xs tracking-wider text-white/80">Futuristic African-Tech Luxury</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            HK.AI
            <span className="block bg-gradient-to-br from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-neon"> Hyper-Learning for the New Africa</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-5 max-w-xl text-lg text-white/70 md:text-xl">
            An intoxicating blend of AI, culture, and craft. Study with motion. Think in neon. Become unstoppable.
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.button ref={ctaRef} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="group relative isolate inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-600 to-cyan-500 px-7 py-3 text-lg font-semibold text-white shadow-xl shadow-fuchsia-500/25 transition-all duration-300">
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0.25), transparent 30%, rgba(255,255,255,0.35))' }} />
              <span className="relative z-10">Get addicted to learning</span>
              <span className="relative z-10 ml-2 inline-block h-2 w-2 animate-ping rounded-full bg-white/80" />
            </motion.button>

            <motion.a href="#what" whileHover={{ x: 4 }} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/80 backdrop-blur-md transition-colors hover:text-white">
              Explore the magic
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
