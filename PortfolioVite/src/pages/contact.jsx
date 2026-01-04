import { Navbar } from '../components/navbar.jsx'
function Contact() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" },
        { name: "Contact", path: "/contact" }
    ];
    return (
        <div>
            <div className='navbar-container'>
                <Navbar links={navLinks} />
            </div>
            <div>
                <h1>Contact me</h1>
                <div></div>
            </div>
            
        </div>
    )
}

export default Contact