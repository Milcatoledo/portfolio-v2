import '../index.css'
import { SkillsSection } from '../components/skillsSection.jsx'
import { Navbar } from '../components/navbar.jsx'
import { CallToAction } from '../components/callToAction.jsx'


function Home() {
    const navLinks = [
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" },
        { name: "Contact", path: "/contact" }
    ];
    return (
        <div className="home-container">
            <div className='navbar-container'>
                <Navbar links={navLinks} />
            </div>
            <div className='call-to-action-container'>
                <CallToAction />
            </div>
            <span id="skills"></span>
            <div>
                <h1 className='title-section-skill'>My skills</h1>
                <SkillsSection />
            </div>
        </div>
    )
}

export default Home