import { motion } from 'framer-motion';
import "./SkillHero.css";
import TileComponent from "../common/tileComponent/index.js";
import skillHero from "/src/assets/images/skill_hero.webp";

const SkillHero = () => {
    return (
        <div className="skill-hero">
            <motion.div
                initial={{x: -500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
            >
                <TileComponent
                    header={'Skills'}
                    text={'I have acquired a variety of skills over the years like C, C++, Java, HTML, CSS, and JavaScript web development and design. I am always eager to learn new technologies and improve my existing skills.'}
                    subHeader={'Here are some of the skills that I have acquired over the years.'}
                    position={'img-right'}
                />
            </motion.div>
            <motion.div
                initial={{x: 500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
                className="skill-hero-image"
            >
                <img src={skillHero} alt="Skill Hero"/>
            </motion.div>
        </div>
    );
};

export default SkillHero;