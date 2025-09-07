import { Navbar } from '../components/navbar.jsx'

function Projects() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div>
            <Navbar links={navLinks} />
            <h1>Projects Page</h1>
        </div>
    )
}

export default Projects