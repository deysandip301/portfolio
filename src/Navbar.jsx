import './Navbar.css';
import {motion} from 'framer-motion';
import {Link, useLocation} from 'react-router-dom';
import logo from './assets/images/logoSD.svg';
// import { ReactComponent as Logo } from './logo.svg';
// import { ReactComponent as LogoSD } from './logoSD.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import BurgerMenu from "./BurgerMenu.jsx";

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
            <nav className="navbar">
                <BurgerMenu />
                <Link to="/" className="logo">
                    <img className="logo-img" src={logo} alt="logo"/>
                </Link>
                <ul className="nav-links">
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <ul className="social-links">
                    <li><Link to="https://www.linkedin.com/in/sandipdey301/" target="_blank"><FontAwesomeIcon
                        icon={faLinkedin} size="2x"/></Link></li>
                    <li><Link to="https://x.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faTwitter}
                                                                                               size="2x"/></Link>
                    </li>
                    <li><Link to="https://www.facebook.com/deysandip301/" target="_blank"><FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"/></Link>
                    </li>
                    <li><Link to="https://www.instagram.com/deysandip301/" target="_blank"><FontAwesomeIcon
                        icon={faInstagram} size="2x"/></Link></li>
                </ul>
            </nav>
        </motion.div>
    );
};
export default Navbar;
