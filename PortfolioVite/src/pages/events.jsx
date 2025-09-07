import { Navbar } from '../components/navbar.jsx'
function Events() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Contact", path: "/contact" }
    ];
    return (
        <div>
            <Navbar links={navLinks} />
            <h1>Events Page</h1>
        </div>
    )
}

export default Events