export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black py-12 text-white/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-white font-semibold">HK.AI</div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#what" className="hover:text-white">What we do</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Community</a>
          </nav>
          <div className="text-xs">© {new Date().getFullYear()} HK.AI — Built for Africa</div>
        </div>
      </div>
    </footer>
  )
}
