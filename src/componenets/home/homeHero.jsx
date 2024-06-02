import { Link } from "react-router-dom";
import hero_image from '../../assets/images/hero-image.webp';
import './homeHero.css';

const HomeHero = () => {
    return (
        <section className="hero">
            <Link to="/">
                <img src={hero_image} alt="hero_image" className="hero-image" />
            </Link>
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

export default HomeHero;