import { motion } from 'framer-motion'

const items = [
  { name: 'Ayo • Lagos', text: 'It feels like the future is hugging my brain. I can\'t stop learning.' },
  { name: 'Zuri • Nairobi', text: 'Smooth, magnetic, addictive. I crave my study sessions.' },
  { name: 'Kwesi • Accra', text: 'Like music for my mind. Every click is a little hit of dopamine.' },
]

export default function Testimonials() {
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_10%,rgba(0,255,255,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Loved by students</h2>
        <p className="mt-3 max-w-2xl text-white/70">Sliding in like silk — minimal, elegant, sincere.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.1, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-white/80">{t.text}</p>
              <div className="mt-4 text-sm text-white/60">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
