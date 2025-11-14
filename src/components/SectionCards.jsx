import { motion, useScroll, useTransform } from 'framer-motion'

const cards = [
  {
    title: 'Guided by AI Mentors',
    desc: 'Personal study flows that adapt to your rhythm — never boring, always euphoric.',
    grad: 'from-fuchsia-500/20 to-cyan-500/20',
  },
  {
    title: 'Africa-Native Content',
    desc: 'Curriculum coded with context — cultural, relevant, future-proof.',
    grad: 'from-amber-400/20 to-fuchsia-500/20',
  },
  {
    title: 'Cinematic Learning',
    desc: 'Every module feels like a scene. Smooth, sensual, unforgettable.',
    grad: 'from-violet-500/20 to-emerald-400/20',
  },
]

export default function SectionCards() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section id="what" className="relative z-10 bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_10%,rgba(255,0,128,0.06),transparent_60%),radial-gradient(40%_40%_at_90%_10%,rgba(0,255,255,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2 style={{ y }} className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
          What HK.AI Does
        </motion.h2>
        <p className="mt-3 text-white/60 max-w-2xl">A clean constellation of power — always flowing, never static.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: i * 0.1, duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.desc}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
