import PropTypes from 'prop-types';
import "./TileComponent.css";

function TileComponent({ header, subHeader, img, icon, text, link, linkText, position, bgColor }) {
    return (
        <div className={`tile ${position}`} style={{backgroundColor: bgColor}}>
            {icon ? (
                <div className="icon-parent">
                    {icon}
                </div>
            ) : img && (
                <div className="img-parent">
                    <img src={img} alt="tile-img"/>
                </div>
            )}
            {(header || subHeader || text || link) && (
                <div className="text-parent">
                    {header && <h2>{header}</h2>}
                    {subHeader && <h3>{subHeader}</h3>}
                    {text && <div className="text">{text}</div>}
                    {link && (
                        <div className="link-parent">
                            <a href={link} className="link">{linkText}</a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

TileComponent.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
    img: PropTypes.string,
    icon: PropTypes.node,
    text: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    position: PropTypes.string,
    bgColor: PropTypes.string
};


export default TileComponent;