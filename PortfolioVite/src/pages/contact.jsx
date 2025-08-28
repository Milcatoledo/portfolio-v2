import { Navbar } from '../components/navbar.jsx'
function Contact() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" }
    ];
    return (
        <div>
            <Navbar links={navLinks} />
            <h1>Contact Page</h1>
        </div>
    )
}

export default Contact