import TypeWriter from "../componenets/common/typeWriter/TypeWriter.jsx";
const About = () => {
    return (
        <div>
            <h1 className="about-heading">About me </h1>
            < TypeWriter text={["Web Developer","Programmer","Designer","Tech enthusiast"]} typingSpeed={100} deletionSpeed={50} />
            <p className="about-description" >Continuous Learner 📚 | Tech Enthusiast 🌐 | Finance 💼 <br />
                Hello! I&apos;m Sandip Dey, a dedicated computer science student with an insatiable appetite for technology and problem-solving. I&apos;m on a journey to explore the limitless possibilities of the digital world.
                Currently pursuing my degree in computer science, I&apos;ve delved into the fascinating realms of programming, algorithms, and software development. Whether it&apos;s creating efficient code, building innovative applications, or solving complex problems, I find joy in every step of the process.</p>

            <img className="about-image" src="https://via.placeholder.com/150" alt="Sandip Dey" />
        </div>
    )
}

export default About;