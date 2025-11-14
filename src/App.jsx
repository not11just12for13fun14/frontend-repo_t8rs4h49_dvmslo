import Hero from './components/Hero'
import SectionCards from './components/SectionCards'
import WhyLove from './components/WhyLove'
import AIShowcase from './components/AIShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <SectionCards />
      <WhyLove />
      <AIShowcase />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
