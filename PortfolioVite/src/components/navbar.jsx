import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = ({ links }) => {
    return (
        <header className="header-container">
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"> Toledo's Portfolio </Link>
                </div>
                <div className="navbar-links">
                    {links.map((link, index) => (
                        <Link key={index} to={link.path}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};