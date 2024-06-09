import { motion } from "framer-motion";
import './projectHero.css';
import projectCollage from '../../assets/images/project_collage.webp';

const ProjectHero = () => {
    return (
        <div className="project-hero">
            <motion.div
                className="project-hero-text"
                initial={{x: -500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
            >
                <h1 className="project-heading">Projects</h1>
                <p className="project-hero-intro">Check out some of my latest projects</p>
                <p className="project-hero-description">I have worked on a variety of projects, ranging from web development to machine learning. I have experience with a variety of technologies, including React, Node.js, and Python. I am always looking for new projects to work on, so feel free to reach out if you have any ideas!</p>
            </motion.div>
            <motion.img
                src={projectCollage}
                alt="hero-projects"
                className="projectHero-hero-img"
                initial={{x: 500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
            />
        </div>
    )
}

export default ProjectHero;