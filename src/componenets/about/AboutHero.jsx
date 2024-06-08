import { motion } from "framer-motion";
import './AboutHero.css';
import TileComponent from "../common/tileComponent/index.js";
import TypeWriter from "../common/typeWriter/TypeWriter.jsx";
import aboutHeroImage from "/src/assets/images/hero_image.webp";

const AboutHero = () => {
    return (
        <div className="about-hero">
            <motion.div
                className="about-tile"
                initial={{x: -500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
            >
                <TileComponent
                    className="about-tile"
                    header={<span>I am <span className={"name-bold"}>Sandip Dey</span></span>}
                    subHeader={'I am a programmer and a tech enthusiast.'}
                    text={'I am a software developer and a tech enthusiast. ' +
                        'I have a passion for learning new technologies and building innovative solutions.' +
                        ' I am always eager to learn new technologies and improve my existing skills.'}
                    img={aboutHeroImage}
                    position={'img-right'}
                />
            </motion.div>
            <motion.div
                className="about-typing"
                initial={{x: 500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
            >
                <TypeWriter
                    constantText={"I am "}
                    changingText={["Competitive programmer" , "Web developer", "Tech enthusiast", "Explorer"]}
                    typingSpeed={100}
                    deletionSpeed={50}
                />
            </motion.div>
        </div>
    )
}

export default AboutHero;