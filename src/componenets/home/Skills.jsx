import SkillCard from "./SkillCard.jsx";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs,faGit,faGithub,faPython,faJava,faCuttlefish} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const skills = [
        {name: "HTML", description: "Experienced in structuring web pages using HTML5.", icon: faHtml5},
        {name: "CSS", description: "Proficient in styling web pages using CSS3 and pre-processors like SASS.", icon: faCss3},
        {name: "JavaScript", description: "Skilled in creating dynamic web applications using JavaScript ES6+.", icon: faJs},
        {name: "React", description: "Experienced in building single-page applications using React.js.", icon: faReact},
        {name: "Node.js", description: "Proficient in building server-side applications using Node.js and Express.js.", icon: faNodeJs},
        {name: "Git", description: "Experienced in version control using Git and GitHub.", icon: faGit},
        {name: "GitHub", description: "Skilled in using GitHub for version control and collaboration.", icon: faGithub},
        {name: "Python", description: "Proficient in scripting and data analysis using Python.", icon: faPython},
        {name: "Java", description: "Experienced in building robust applications using Java.", icon: faJava},
        // {name: "C++", description: "Skilled in system-level programming using C++.", icon: 'simple-icons: C++'},
        {name: "C", description: "Proficient in low-level programming using C.", icon: faCuttlefish},
        // {name: "SQL", description: "Experienced in database management and operations using SQL.", icon: faDatabase},
    ];

    return (
        <div className="skills">
            <h1>Skills</h1>
            {skills.map((skill, index) => (
                < SkillCard key={index} skill={skill} />
            ))}
        </div>
    )
}

export default Skills;