import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Collection from './components/Collection'
import Comparison from './components/Comparison'
import Footer from './components/Footer'
import StatsBar from './components/StatsBar'

function App() {

  return (
    <>
      <div className="font-sans text-gray-900">
        <Navbar />
        <Hero />
        <ProductSection />
        <Collection />
        <StatsBar />
        <Comparison />
        <Footer />
      </div>
    </>
  )
}

export default App
