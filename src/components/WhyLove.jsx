import { motion } from 'framer-motion'

const reasons = [
  'Motion that makes you feel',
  'Study flows that seduce, not stress',
  'Progress that looks like art',
  'Community that glows',
]

export default function WhyLove() {
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_80%_10%,rgba(102,51,153,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Why students love it</h2>
        <p className="mt-3 max-w-2xl text-white/70">Seductive transitions. Soft depth. A UI that breathes with you.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <p className="text-lg">{r}</p>
                <div className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_6px_rgba(244,63,94,0.45)] group-hover:animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
