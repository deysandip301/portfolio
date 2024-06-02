import TileComponent from "../common/tileComponent/index.js";

const AboutHero = () => {
    return (
        <div className="about-hero">
            <TileComponent
                header={<span>I am <span className={"name-bold"}>Sandip Dey</span></span>}
                subHeader={'I am a programmer and a tech enthusiast.'}
                text={'I am a software developer and a tech enthusiast. ' +
                    'I have a passion for learning new technologies and building innovative solutions.' +
                    ' I am always eager to learn new technologies and improve my existing skills.'}
                img={"https://via.placeholder.com/150"}
                position={'img-right'}
            />

        </div>
    )
}

export default AboutHero;