import TileComponent from "../tileComponent/index.js";
import ProgressBar from "../progressBar/index.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)

function SkillCard({skillname, skilldescription, skillimage, skillicon, skillpercent, skillposition}) {
    const tileDirection = skillposition === 'right' ?  ''  : 'img-right';
    const progressdirection = skillposition === 'right' ? 'rtl' : 'ltr';
    return (
        <div className="skill-card">
            <TileComponent header={`${skillname}`} text={`${skilldescription}`} img={`${skillimage}`} icon={skillicon} position={tileDirection} />
            <ProgressBar percent={`${skillpercent}`} useAnimation={false} direction={progressdirection} />
        </div>
    )
}

export default SkillCard;