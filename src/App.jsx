import { useState, useEffect } from "react"
import { Menu, X, GitlabIcon as GitHub, Linkedin, Mail, ExternalLink} from "lucide-react"
import { motion } from "framer-motion"
import { Header, Main, Footer } from "./Layout/index.js"

 function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll progress for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "experience", "education", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-teal-500 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    <Header activeSection={activeSection} toggleMenu={toggleMenu} Menu={Menu} isMenuOpen={isMenuOpen} X={X}/>
    <Main motion={motion} GitHub={GitHub} Linkedin={Linkedin} Mail={Mail} ExternalLink={ExternalLink}/>
    <Footer />
    </div>
  )
}

export default App
