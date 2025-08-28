import { Navbar } from '../components/navbar.jsx'

export const Projects = () => {
    return (
        <div className='projects-container'>
            <Navbar optionOne="projects" optionTwo="contact" />
            <h1>My Projects</h1>
            {/* Tu contenido de proyectos aquí */}
        </div>
    )
}