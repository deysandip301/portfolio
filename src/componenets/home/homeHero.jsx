import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero_image from '../../assets/images/hero_image.webp';
import './homeHero.css';

const HomeHero = () => {
    return (
        <section className="hero">
            <Link to="/">
                <motion.img
                    src={hero_image}
                    alt="hero_image"
                    className="hero-image"
                    initial={{x: 500}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                />
            </Link>
            <motion.div
                className="hero-overlay"
                initial={{x: -500}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
            >
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
            </motion.div>
        </section>
    )
}

export default HomeHero;