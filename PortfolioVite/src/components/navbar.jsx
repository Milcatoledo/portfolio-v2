import '../styles/navbar.css'
export const Navbar = ({optionOne, optionTwo }) => {
    return (
        <header className="header-container">
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <a href="/"> Toledo's Portfolio </a>
                </div>
                <div className="navbar-links">
                    <a href={"/" + optionOne}> {optionOne} </a>
                    <a href={"/" + optionTwo}> {optionTwo} </a>
                </div>
            </nav>
        </header>
    );
};