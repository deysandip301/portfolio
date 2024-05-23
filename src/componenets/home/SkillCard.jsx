import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({skill}) => {
    return (
        <div className="skill-card">
            <FontAwesomeIcon icon={skill.icon} size="2x" />
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
        </div>
    )
}

SkillCard.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
    }).isRequired,
};

export default SkillCard;