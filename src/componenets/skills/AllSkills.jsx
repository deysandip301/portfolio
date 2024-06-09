import './AllSkills.css';
import SkillCard from "../common/skillCard/SkillCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCode, faCoffee } from '@fortawesome/free-solid-svg-icons';

const skills = [
    {
        skillname: 'C',
        skilldescription: 'Proficient in procedural programming, memory management, and low-level system tasks.',
        skillimage: '', // Add the URL of the image for C
        skillicon: faCogs,
        skillpercent: 70 // Add the proficiency percentage for C
    },
    {
        skillname: 'C++',
        skilldescription: 'Experienced in object-oriented programming, template metaprogramming, and STL.',
        skillimage: '', // Add the URL of the image for C++
        skillicon: faCode,
        skillpercent: 85 // Add the proficiency percentage for C++
    },
    {
        skillname: 'Java',
        skilldescription: 'Skilled in object-oriented programming and java with good hold on DSA and designing.',
        skillimage: '', // Add the URL of the image for Java
        skillicon: faCoffee,
        skillpercent: 80 // Add the proficiency percentage for Java
    },
    // {
    //     skillname: 'HTML',
    //     skilldescription: 'Expert in creating structured and semantic markup for web pages.',
    //     skillimage: '', // Add the URL of the image for HTML
    //     skillicon: faHtml5,
    //     skillpercent: 75 // Add the proficiency percentage for HTML
    // },
    // {
    //     skillname: 'CSS',
    //     skilldescription: 'Proficient in creating responsive and visually appealing web pages.',
    //     skillimage: '', // Add the URL of the image for CSS
    //     skillicon: faCss3Alt,
    //     skillpercent: 65 // Add the proficiency percentage for CSS
    // },
    // {
    //     skillname: 'JavaScript',
    //     skilldescription: 'Expert in creating interactive web pages and single-page applications.',
    //     skillimage: '', // Add the URL of the image for JavaScript
    //     skillicon: faJsSquare,
    //     skillpercent: 70 // Add the proficiency percentage for JavaScript
    // }
];

const AllSkills = () => {
    return (
        <div className="all-skills">
            {skills.map((skill, index) => {
                const position = index % 2 === 0 ? 'right' : 'left';
                return (
                    <SkillCard
                        key={index}
                        skillname={skill.skillname}
                        skilldescription={skill.skilldescription}
                        skillimage={skill.skillimage}
                        skillicon={skill.skillicon}
                        skillpercent={skill.skillpercent}
                        skillposition={position}
                        width={50}
                        progressBarcolor={'rgba(59,59,59,0.75)'}
                    />
                );
            })}
        </div>
    );
};

export default AllSkills;