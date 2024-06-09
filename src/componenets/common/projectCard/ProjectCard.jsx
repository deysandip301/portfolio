import PropTypes from 'prop-types';
import './ProjectCard.css';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            <img className="project-image" src={project.image} alt={project.name} />
            <div className="project-bottom">
                <div className="project-details">
                    <h2 className="project-name">{project.name}</h2>
                    <p className="project-desc">{project.description}</p>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faChevronRight} size="3x"/>
                </a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;