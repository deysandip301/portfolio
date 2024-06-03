import  './AboutHero.css';
import TileComponent from "../common/tileComponent/index.js";
import TypeWriter from "../common/typeWriter/TypeWriter.jsx";
import aboutHeroImage from "/src/assets/images/hero_image.webp";

const AboutHero = () => {
    return (
        <div className="about-hero">
            <div className="about-tile">
                <TileComponent className="about-tile"
                               header={<span>I am <span className={"name-bold"}>Sandip Dey</span></span>}
                               subHeader={'I am a programmer and a tech enthusiast.'}
                               text={'I am a software developer and a tech enthusiast. ' +
                                   'I have a passion for learning new technologies and building innovative solutions.' +
                                   ' I am always eager to learn new technologies and improve my existing skills.'}
                               img={aboutHeroImage}
                               position={'img-right'}
                />
            </div>
            <div className="about-typing">
                < TypeWriter constantText={"I am "} changingText={["Competitive programmer" , "Web developer", "Tech enthusiast", "Explorer"]} typingSpeed={100} deletionSpeed={50}/>
            </div>
            </div>
    )
}

export default AboutHero;