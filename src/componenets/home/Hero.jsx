import hero_image from '../../assets/images/hero-image.webp';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/*<div className="hero-image-div">*/}
                <img src={hero_image} alt="hero_image" className="hero-image"/>
            {/*</div>*/}
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="left">
                        <h1>&lt;coder&gt;</h1>
                        <p>Creating the future with code, shaping tomorrow&apos;s world today.</p>
                    </div>
                    <div className="right">
                        <h1>developer☕︎</h1>
                        <p>Building innovative solutions, transforming ideas into reality.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
