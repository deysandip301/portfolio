import ProjectCard from "../common/projectCard/ProjectCard.jsx";
import './AllProjects.css';

const AllProjects = () => {
    const projects = [
        {name: "Project 1", description: "This is project 1", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 2", description: "This is project 2", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 3", description: "This is project 3", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 4", description: "This is project 4", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 5", description: "This is project 5", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 6", description: "This is project 6", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 7", description: "This is project 7", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 8", description: "This is project 8", link: "#", image: "https://via.placeholder.com/150"},
        {name: "Project 9", description: "This is project 9", link: "#", image: "https://via.placeholder.com/150"},
    ];
    return (
        <div className="all-projects">
            <div className="projects">
                {projects.map((project, index) => {
                    return <ProjectCard key={index} project={project} />
                })}
            </div>
        </div>
    )
}

export default AllProjects;