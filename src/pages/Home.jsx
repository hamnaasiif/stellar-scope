import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ExploreGrid from "../components/ExploreGrid"
import SolarSystemExplorer from "../components/SolarSystemExplorer"
import PremiumFeatures from "../components/PremiumFeatures"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreGrid />
      <SolarSystemExplorer />
      <PremiumFeatures />
      <Footer />
    </>
  )
}

export default Home
