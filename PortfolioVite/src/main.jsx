import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SkillsSection } from './components/skillsSection.jsx'
import { Navbar } from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='skills-container'>
      <Navbar optionOne="projects" optionTwo="contact" />
      <h1>My skills</h1>
      <SkillsSection />
    </div>
  </StrictMode>
)