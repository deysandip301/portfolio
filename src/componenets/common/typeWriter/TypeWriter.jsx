import  { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import './TypeWriter.css';

const TypeWriter = ({
                    constantText="I'm a ",
                    changingText,
                    typingSpeed=100,
                    deletionSpeed=50
                }) => {
    const [displayedText,setDisplayedText] = useState("");
    const [isDeleting,setIsDeleting] = useState(false);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if(!isDeleting) {
                if(displayedText.length < changingText[index].length) {
                    setDisplayedText((prev) => prev + changingText[index].charAt(prev.length));
                }
                else {
                    setTimeout(() => setIsDeleting(true),1000);
                }
            }
            else {
                if(displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0,prev.length-1));
                }
                else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev+1)%changingText.length);
                }
            }
        };
        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletionSpeed : typingSpeed
        );
        return () => clearTimeout(timeout);
    },[displayedText,isDeleting,index,changingText,typingSpeed,deletionSpeed]);

    // ... other code

    return (
        <div className="typing-effect">
            <h3>{constantText} <span className="changing-text">
            <span className={displayedText ? "active" : ""}>
                {displayedText}
            </span>
            <span className="caret" style={{ color: '#fff' }}>|</span>
        </span></h3>
        </div>
    )

// ... other code

}

TypeWriter.propTypes = {
    constantText: PropTypes.string,
    changingText: PropTypes.arrayOf(PropTypes.string).isRequired,
    typingSpeed: PropTypes.number,
    deletionSpeed: PropTypes.number
};

export default TypeWriter;