import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutAiSana from './components/AboutAiSana.jsx'
import PresidentQuote from './components/PresidentQuote.jsx'
import Results from './components/Results.jsx'
import ProjectsCarousel from './components/ProjectsCarousel.jsx'
import Stages from './components/Stages.jsx'
import Overview from './components/Overview.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutAiSana />
        <PresidentQuote />
        <Results />
        <ProjectsCarousel />
        <Stages />
        <Overview />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
