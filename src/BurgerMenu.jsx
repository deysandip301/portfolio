import { useState } from 'react';
import './BurgerMenu.css';
import logo from './assets/images/logoSD.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="burger-menu">
            <img src={logo} alt="logo" className="logo" />
            <button onClick={() => setOpen(!open)} className="burger-button">
                <div></div>
                <div></div>
                <div></div>
            </button>
            {open && (
                <div className="menu">
                    <ul className="nav-links">
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="https://www.linkedin.com/in/sandipdey301/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></Link></li>
                        <li><Link to="https://x.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></Link></li>
                        <li><Link to="https://www.facebook.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></Link></li>
                        <li><Link to="https://www.instagram.com/deysandip301/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;