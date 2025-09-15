import '../index.css'
import '../styles/skills.css'
import { SkillsSection } from '../components/skillsSection.jsx'
import { Navbar } from '../components/navbar.jsx'
import { CallToAction } from '../components/callToAction.jsx'
import { AsideSection } from '../components/asideSection.jsx'


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
                <div className="skills-section-container">
                    <div className="skills-wrapper">
                        <h2 className='title-section-skill'>My skills</h2>
                        <SkillsSection />
                    </div>
                    <div className="aside-wrapper">
                        <h2>About Me</h2>
                        <AsideSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home