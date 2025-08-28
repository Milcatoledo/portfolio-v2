import './index.css'
import { SkillsSection } from './components/skillsSection.jsx'
import { Navbar } from './components/navbar.jsx'

function App() {
    return (
        <div className='skills-container'>
            <Navbar optionOne="projects" optionTwo="contact" />
            <h1>My skills</h1>
            <SkillsSection />
        </div>
    )
}

export default App