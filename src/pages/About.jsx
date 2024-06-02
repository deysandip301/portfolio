import TypeWriter from "../componenets/common/typeWriter/TypeWriter.jsx";
import AboutHero from "../componenets/about/AboutHero.jsx";
const About = () => {
    return (
        <div className="about-page">
            < AboutHero />
            < TypeWriter constantText={"I am a "} changingText={["Competitive programmer" , "Web developer", "Tech enthusiast", "Explorer"]} typingSpeed={100} deletionSpeed={50}/>
        </div>
    )
}

export default About;