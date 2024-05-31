import {faCode, faCoffee, faCogs, faCss3Alt, faHtml5, faJsSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SkillCard from "../componenets/home/SkillCard.jsx";
const skills = [
    {
        skillname: 'C',
        skilldescription: 'Proficient in procedural programming, memory management, and low-level system tasks.',
        skillimage: '', // Add the URL of the image for C
        skillicon: <FontAwesomeIcon icon={faCogs} />, // Use the FontAwesomeIcon component
        skillpercent: 80 // Add the proficiency percentage for C
    },
    {
        skillname: 'C++',
        skilldescription: 'Experienced in object-oriented programming, template metaprogramming, and STL.',
        skillimage: '', // Add the URL of the image for C++
        skillicon: <FontAwesomeIcon icon={faCode} />, // Use the FontAwesomeIcon component
        skillpercent: 85 // Add the proficiency percentage for C++
    },
    {
        skillname: 'Java',
        skilldescription: 'Skilled in object-oriented programming, multithreading, and JVM.',
        skillimage: '', // Add the URL of the image for Java
        skillicon: <FontAwesomeIcon icon={faCoffee} />, // Use the FontAwesomeIcon component
        skillpercent: 80 // Add the proficiency percentage for Java
    },
    {
        skillname: 'HTML',
        skilldescription: 'Expert in creating structured and semantic markup for web pages.',
        skillimage: '', // Add the URL of the image for HTML
        skillicon: <FontAwesomeIcon icon={faHtml5} />, // Use the FontAwesomeIcon component
        skillpercent: 75 // Add the proficiency percentage for HTML
    },
    {
        skillname: 'CSS',
        skilldescription: 'Proficient in creating responsive and visually appealing web pages.',
        skillimage: '', // Add the URL of the image for CSS
        skillicon: <FontAwesomeIcon icon={faCss3Alt} />, // Use the FontAwesomeIcon component
        skillpercent: 65 // Add the proficiency percentage for CSS
    },
    {
        skillname: 'JavaScript',
        skilldescription: 'Expert in creating interactive web pages and single-page applications.',
        skillimage: '', // Add the URL of the image for JavaScript
        skillicon: <FontAwesomeIcon icon={faJsSquare} />, // Use the FontAwesomeIcon component
        skillpercent: 70 // Add the proficiency percentage for JavaScript
    }
];
const Skills = () => {
    return (
        <>
            {skills.map((skill, index) => (
                <SkillCard
                    key={index}
                    skillname={skill.skillname}
                    skilldescription={skill.skilldescription}
                    skillimage={skill.skillimage}
                    skillicon={skill.skillicon}
                    skillpercent={skill.skillpercent}
                    skill={skill}
                />
            ))}
        </>
    )
}

export default Skills;