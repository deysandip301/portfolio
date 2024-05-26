import ProjectCard from "../common/projectCard/ProjectCard.jsx";
import './Projects.css';
const Projects = () => {
    const projects = [
        {name: "Project 1", description: "This is project 1", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 2", description: "This is project 2", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 3", description: "This is project 3", link: "#", image: "https://via.placeholder.com/150"},
        // Add more projects here
    ];

    return (
        <div className="projects-all">
            <h3 className="projects-text">SOME OF MY LATEST WORK</h3>
            <div className="projects">
            {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
        // <div className="project">
        //     <h2>project 1</h2>
        //     <p>this is project 1</p>
        //     <a href="#">Github link</a>
        // </div>
    )
}

export default Projects;