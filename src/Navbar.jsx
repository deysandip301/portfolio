import './Navbar.css';
import logo from './assets/images/logoSD.svg';
// import { ReactComponent as Logo } from './logo.svg';
// import { ReactComponent as LogoSD } from './logoSD.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"/>
            {/*<LogoSD className="logo"/>*/}
            <ul className="nav-links">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/sandipdey301/" target="_blank"><FontAwesomeIcon
                    icon={faLinkedin} size="2x"/></a></li>
                <li><a href="https://x.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                </li>
                <li><a href="https://www.facebook.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faFacebook}
                                                                                                      size="2x"/></a>
                </li>
                <li><a href="https://www.instagram.com/deysandip301/" target="_blank"><FontAwesomeIcon
                    icon={faInstagram} size="2x"/></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;