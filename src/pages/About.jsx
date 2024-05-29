import TypeWriter from "../componenets/common/typeWriter/TypeWriter.jsx";
const About = () => {
    return (
        <div>
            <h1>About me </h1>
            < TypeWriter text={["Web Developer","Programmer","Designer"]} typingSpeed={100} deletionSpeed={50} />
        </div>
    )
}

export default About;