import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Overview from './components/Overview.jsx'
import Projects from './components/Projects.jsx'
import ChatbotBand from './components/ChatbotBand.jsx'
import Timeline from './components/Timeline.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Projects />
        <ChatbotBand />
        <Timeline />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
