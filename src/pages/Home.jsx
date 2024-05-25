import Hero from "../componenets/home/Hero.jsx";
import Projects from "../componenets/home/Projects.jsx";
import Skills from "../componenets/home/Skills.jsx";
import About from "../componenets/home/About.jsx";

const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <Skills />
            <About title={1}/>
            {/*<Contact />*/}
        </div>
    )
}

export default Home;