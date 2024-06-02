import './Footer.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bottom">
            <div className="footer">
                <div className="footer-content">
                    <p className="copyright">&copy; 2024 Sandip Dey</p>
                    <ul className="footer-links">
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="arrow-up-wrapper">
                    <div className="arrow-up" onClick={scrollToTop}>
                        <div className="arrow"><FontAwesomeIcon icon={faChevronUp} size="3x" /></div>
                    </div>
                </div>
            </div>
            <div className="credit">
                Designed and maintained by <Link to="https://www.linkedin.com/in/sandipdey301/" target="_blank" rel="noopener noreferrer">Sandip Dey</Link>
            </div>
        </footer>
    );
}

export default Footer;
