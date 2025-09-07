import { Navbar } from '../components/navbar.jsx'
function Courses() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" }
    ];
    return (
        <div>
            <Navbar links={navLinks} />
            <h1>Courses Page</h1>
        </div>
    )
}

export default Courses