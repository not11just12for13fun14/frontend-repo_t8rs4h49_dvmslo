import { motion } from 'framer-motion'

function Node({ delay }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, repeat: Infinity, repeatType: 'reverse', duration: 2.4 }} className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,0.45)]" />
  )
}

export default function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">AI features that feel alive</h2>
        <p className="mt-3 max-w-2xl text-white/70">Neural network motion. Flowing lines. Glowing nodes.</p>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Hyper-personalization</h3>
              <p className="mt-2 text-white/70">Every lesson adapts — timing, difficulty, energy. You just surf the flow.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Neural pathfinding</h3>
              <p className="mt-2 text-white/70">Our models map your strengths and pull you into deeper mastery.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sensory micro-interactions</h3>
              <p className="mt-2 text-white/70">Tiny pulses and soft glows guide your attention and reward your progress.</p>
            </div>
          </div>

          <div className="pointer-events-none relative mt-10 h-56 rounded-2xl border border-white/10 bg-black/40">
            <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 600 220" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
              <path d="M0 110 C150 20, 300 200, 600 70" stroke="url(#g1)" strokeWidth="2" />
              <path d="M0 150 C120 60, 330 180, 600 130" stroke="url(#g1)" strokeWidth="1" opacity="0.7" />
              <path d="M0 80 C180 10, 360 190, 600 110" stroke="url(#g1)" strokeWidth="1.5" opacity="0.7" />
            </svg>
            <div className="absolute left-[10%] top-[45%]"><Node delay={0.0} /></div>
            <div className="absolute left-[35%] top-[30%]"><Node delay={0.4} /></div>
            <div className="absolute left-[55%] top-[65%]"><Node delay={0.8} /></div>
            <div className="absolute left-[80%] top-[40%]"><Node delay={1.2} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
