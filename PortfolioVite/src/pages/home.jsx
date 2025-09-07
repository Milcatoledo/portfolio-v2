import '../index.css'
import { SkillsSection } from '../components/skillsSection.jsx'
import { Navbar } from '../components/navbar.jsx'


function Home() {
    const navLinks = [
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" },
        { name: "Contact", path: "/contact" }
    ];
    return (
        <div className='skills-container'>
            <Navbar links={navLinks} />
            <h1>My skills</h1>
            <SkillsSection />
        </div>
    )
}

export default Home