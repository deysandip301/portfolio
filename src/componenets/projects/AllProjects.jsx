import ProjectCard from "../common/projectCard/ProjectCard.jsx";
import './AllProjects.css';
import imageEditor from '/src/assets/images/image_editor.webp';

const AllProjects = () => {
    const projects = [
        {name: "CLI image editor", description: "This is a basic command line image editor with many functionality", link: "https://github.com/deysandip301/Image-Editor", image: imageEditor},
        {name: "Web scrapper", description: "This is a scrapper which returns the 10 most affordable product searched by user", link: "https://github.com/deysandip301/web_scrapper", image: "https://via.placeholder.com/150"},
        {name: "To do list", description: "Advanced to do list with prioritising tasks ", link: "https://github.com/deysandip301/To-do-list", image: "https://via.placeholder.com/150"},
        {name: "music player", description: "A basic music player with many functionalities.", link: "https://github.com/deysandip301/music_player", image: "https://via.placeholder.com/150"},
        {name: "Skill overflow", description: "This is a resource website to learn any type of tech stack with detailed roadmap", link: "https://github.com/deysandip301/skill-overflow", image: "https://via.placeholder.com/150"},
        {name: "Ecommerce backend", description: "Mock backend of an ecommerce business company", link: "https://github.com/deysandip301/Ecommerce-Backend", image: "https://via.placeholder.com/150"},
        {name: "Tic Tac Toe", description: "CLI based tic tac toe game with extensible OOPs used java backend project", link: "https://github.com/deysandip301/TicTacToe", image: "https://via.placeholder.com/150"},
        {name: "Quiz app", description: "This is a basic quiz app with attractive UI and randomisation of questions", link: "https://github.com/deysandip301/Quiz-app", image: "https://via.placeholder.com/150"},
        {name: "Portfolio website", description: "This is my portfolio made with react with attractive design", link: "https://github.com/deysandip301/portfolio", image: "https://via.placeholder.com/150"},
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