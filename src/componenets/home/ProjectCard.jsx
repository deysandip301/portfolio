import PropTypes from 'prop-types';

const ProjectCard = ({project}) => {
    return (
        <div className="project">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;