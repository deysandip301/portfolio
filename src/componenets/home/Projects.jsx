import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
    const projects = [
        {name: "Project 1", description: "This is project 1", link: "#"},
        {name: "Project 2", description: "This is project 2", link: "#"},
        {name: "Project 3", description: "This is project 3", link: "#"},
        // Add more projects here
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
        // <div className="project">
        //     <h2>project 1</h2>
        //     <p>this is project 1</p>
        //     <a href="#">Github link</a>
        // </div>
    )
}

export default Projects;