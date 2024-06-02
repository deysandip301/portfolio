import HomeHero from "../componenets/home/homeHero.jsx";
import Projects from "../componenets/home/Projects.jsx";

const Home = () => {
    return (
        <div className="home-page">
            <HomeHero />
            <Projects />
            {/*<Skills />*/}
            {/*<About title={1}/>*/}
            {/*<Contact />*/}
        </div>
    )
}

export default Home;