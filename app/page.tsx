import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Universities from './components/Universities'
import Scholarship from './components/Scholarship'
import Topik from './components/Topik'
import Roadmap from './components/Roadmap'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Universities />
      <Scholarship />
      <Topik />
      <Roadmap />
      <CTABanner />
      <Footer />
    </main>
  )
}