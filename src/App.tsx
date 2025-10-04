import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import LanguageSelector from './components/sections/LanguageSelector'
import Features from './components/sections/Features'
import AILearning from './components/sections/AILearning'
import FAQ from './components/sections/FAQ'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <LanguageSelector />
        <Features />
        <AILearning />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

