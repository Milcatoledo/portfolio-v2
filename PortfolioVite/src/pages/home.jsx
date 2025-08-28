import '../index.css'
import { SkillsSection } from '../components/skillsSection.jsx'
import { Navbar } from '../components/navbar.jsx'


function App() {
    return (
        <div className='skills-container'>
            <Navbar optionOne="Projects" optionTwo="Contact" />
            <h1>My skills</h1>
            <SkillsSection />
        </div>
    )
}

export default App