import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutAiSana from './components/AboutAiSana.jsx'
import PresidentQuote from './components/PresidentQuote.jsx'
import Projects from './components/Projects.jsx'
import ProjectsCarousel from './components/ProjectsCarousel.jsx'
import Stages from './components/Stages.jsx'
import Timeline from './components/Timeline.jsx'
import ChatbotBand from './components/ChatbotBand.jsx'
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
        <Projects />
        <ProjectsCarousel />
        <Stages />
        <Timeline />
        <ChatbotBand />
        <Overview />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
