import HomeHero from "../componenets/home/homeHero.jsx";
import Projects from "../componenets/home/Projects.jsx";

const Home = () => {
    return (
        <div>
            <HomeHero />
            <Projects />
            {/*<Skills />*/}
            {/*<About title={1}/>*/}
            {/*<Contact />*/}
        </div>
    )
}

export default Home;