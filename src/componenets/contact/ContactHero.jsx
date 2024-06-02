import './ContactHero.css';
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactHero = () => {
    return (
        <div className="contact-hero">
            <motion.div
                className="contact-details"
                initial={{x: 100}}
                animate={{x: 0}}
                exit={{x: 100}}
                transition={{duration: 0.5}}
            >
                <h1>Contact Me</h1>
                <h3>Feel free to reach out to me, I am always open to new opportunities and collaborations.</h3>
                <div className="social">
                    {/* Your existing code here */}
                    < div className="social-item">
                    <a href="https://x.com/deysandip301/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter color="#1DA1F2" size="2em"/>
                        <span style={{color: "#1DA1F2"}}>Twitter</span>
                    </a>
                </div>
                <div className="social-item">
                    <a href="https://www.facebook.com/deysandip301/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook color="#4267B2" size="2em"/>
                        <span style={{color: "#4267B2"}}>Facebook</span>
                    </a>
                </div>
                <div className="social-item">
                    <a href="https://www.instagram.com/deysandip301/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram color="#C13584" size="2em"/>
                        <span style={{color: "#C13584"}}>Instagram</span>
                    </a>
                </div>
                <div className="social-item">
                    <a href="https://www.linkedin.com/in/sandipdey301/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color="#2867B2" size="2em"/>
                        <span style={{color: "#2867B2"}}>LinkedIn</span>
                    </a>
                </div>
            </div>
            </motion.div>
            <motion.div
                className="contact-image"
                initial={{x: -100}}
                animate={{x: 0}}
                exit={{x: -100}}
                transition={{duration: 0.5}}
            >
                <img className={"contact-img"} src="/src/assets/images/hero-image.webp" alt={"contact"}/>
            </motion.div>
        </div>
    )
}

export default ContactHero;