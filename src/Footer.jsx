import './Footer.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bottom">
            <div className="footer">
                <div className="arrow-up">
                    <div className="arrow"><FontAwesomeIcon icon={faChevronUp} size="5x"/></div>
                </div>
                <div className="footer-content">
                    <p className="copyright">&copy; 2024 Sandip Dey</p>
                    <ul className="footer-links">
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="credit">
                Designed and maintained by <a href="https://www.linkedin.com/in/sandipdey301/" target="_blank" rel="noopener noreferrer">Sandip Dey</a>
            </div>
        </footer>
    )
}

export default Footer;
