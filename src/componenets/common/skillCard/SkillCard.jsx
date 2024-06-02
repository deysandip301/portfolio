import './SkillCard.css';
import TileComponent from "../tileComponent/index.js";
import ProgressBar from "../progressBar/index.js";
import { fas, faCode, faCoffee, faCogs } from '@fortawesome/free-solid-svg-icons'

function SkillCard({skillname, skilldescription, skillimage, skillicon, skillpercent, skillposition, width ,progressBarcolor}) {
    const tileDirection = skillposition === 'right' ?  ''  : 'img-right';
    const progressdirection = skillposition === 'right' ? 'ltr' : 'rtl';
    return (
        <div className="skill-card" style={{width: `${width}vw` , }}>
            <TileComponent
                header={`${skillname}`}
                text={`${skilldescription}`}
                img={`${skillimage}`}
                icon={skillicon}
                position={tileDirection}
            />
            <ProgressBar percent={`${skillpercent}`} useAnimation={false} direction={progressdirection} bgColor={progressBarcolor} />
        </div>
    )
}

export default SkillCard;