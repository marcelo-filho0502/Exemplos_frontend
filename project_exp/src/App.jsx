import { useLang } from './i18n/LanguageContext'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Showcase from './components/Showcase/Showcase'
import Services from './components/Services/Services'
import About from './components/About/About'
import Skills from './components/Skillss/Skills'
import Contact from './components/Contact/Contact'
import IridescenceBackground from './components/Iridescence/IridescenceBackground'
import './styles/global.css'

function App() {
  const { t } = useLang()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <IridescenceBackground />
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
