import './Navbar.css';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import logo from './assets/images/logoSD.svg';
// import { ReactComponent as Logo } from './logo.svg';
// import { ReactComponent as LogoSD } from './logoSD.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial={{y: -100}}
            animate={{y: 0}}
            exit={{y: -100}}
            transition={{duration: 0.5}}
        >
            {/* Your existing code here */}
            <nav className="navbar">
                <a href="/" className="logo">
                    <img className="logo-img" src={logo} alt="logo"/>
                </a>
                <ul className="nav-links">
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <ul className="social-links">
                    <li><a href="https://www.linkedin.com/in/sandipdey301/" target="_blank"><FontAwesomeIcon
                        icon={faLinkedin} size="2x"/></a></li>
                    <li><a href="https://x.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faTwitter}
                                                                                               size="2x"/></a>
                    </li>
                    <li><a href="https://www.facebook.com/deysandip301/" target="_blank"><FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"/></a>
                    </li>
                    <li><a href="https://www.instagram.com/deysandip301/" target="_blank"><FontAwesomeIcon
                        icon={faInstagram} size="2x"/></a></li>
                </ul>
            </nav>
        </motion.div>
    );
};
export default Navbar;
