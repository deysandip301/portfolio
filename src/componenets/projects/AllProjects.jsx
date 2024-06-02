import ProjectCard from "../common/projectCard/ProjectCard.jsx";
import './AllProjects.css';
import imageEditor from '/src/assets/images/image_editor.webp';
import webScrapper from '/src/assets/images/web_scrapper.webp';
import toDoList from '/src/assets/images/to_do_list.webp';
import musicPlayer from '/src/assets/images/music_player.webp';
import skillOverflow from '/src/assets/images/skill_overflow.webp';
import ecommerceBackend from '/src/assets/images/ecommerce_backend.webp';
import ticTacToe from '/src/assets/images/tic_tac_toe.webp';
import quizApp from '/src/assets/images/quiz_app.webp';
import portfolioWebsite from '/src/assets/images/portfolio_website.webp';

const AllProjects = () => {
    const projects = [
        {name: "CLI image editor", description: "This is a basic command line image editor with many functionality", link: "https://github.com/deysandip301/Image-Editor", image: imageEditor},
        {name: "Web scrapper", description: "This is a scrapper which returns the 10 most affordable product searched by user", link: "https://github.com/deysandip301/web_scrapper", image: webScrapper},
        {name: "To do list", description: "Advanced to do list with prioritising tasks ", link: "https://github.com/deysandip301/To-do-list", image: toDoList},
        {name: "music player", description: "A basic music player with many functionalities.", link: "https://github.com/deysandip301/music_player", image: musicPlayer},
        {name: "Skill overflow", description: "This is a resource website to learn any type of tech stack with detailed roadmap", link: "https://github.com/deysandip301/skill-overflow", image: skillOverflow },
        {name: "Ecommerce backend", description: "Mock backend of an ecommerce business company", link: "https://github.com/deysandip301/Ecommerce-Backend", image: ecommerceBackend},
        {name: "Tic Tac Toe", description: "CLI based tic tac toe game with extensible OOPs used java backend project", link: "https://github.com/deysandip301/TicTacToe", image: ticTacToe},
        {name: "Quiz app", description: "This is a basic quiz app with attractive UI and randomisation of questions", link: "https://github.com/deysandip301/Quiz-app", image: quizApp},
        {name: "Portfolio website", description: "This is my portfolio made with react with attractive design", link: "https://github.com/deysandip301/portfolio", image: portfolioWebsite },
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