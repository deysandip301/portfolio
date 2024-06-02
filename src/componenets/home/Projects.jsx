import ProjectCard from "../common/projectCard/ProjectCard.jsx";
import './Projects.css';
const Projects = () => {
    const projects = [
        {name: "CLI image editor", description: "This is a basic command line image editor with many functionality", link: "https://github.com/deysandip301/Image-Editor", image: "https://via.placeholder.com/150"},
        {name: "Web scrapper", description: "This is a scrapper which returns the 10 most affordable product searched by user", link: "https://github.com/deysandip301/web_scrapper", image: "https://via.placeholder.com/150"},
        {name: "To do list", description: "Advanced to do list with prioritising tasks ", link: "https://github.com/deysandip301/To-do-list", image: "https://via.placeholder.com/150"},
        // Add more projects here
    ];

    return (
        <div className="projects-all">
            <h3 className="projects-text">SOME OF MY LATEST WORK</h3>
            <div className="projects-home">
            {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;