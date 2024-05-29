import  { useState , useEffect } from 'react';
import PropTypes from 'prop-types';

const TypeWriter = ({
                    text,
                    typingSpeed=100,
                    deletionSpeed=50
                }) => {
    const [displayedText,setDisplayedText] = useState("");
    const [isDeleting,setIsDeleting] = useState(false);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if(!isDeleting) {
                if(displayedText.length < text[index].length) {
                    setDisplayedText((prev) => prev + text[index].charAt(prev.length));
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
                    setIndex((prev) => (prev+1)%text.length);
                }
            }
        };
        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletionSpeed : typingSpeed
        );
        return () => clearTimeout(timeout);
    },[displayedText,isDeleting,index,text,typingSpeed,deletionSpeed]);

    return (
        <div className="typing-effect">
            <h1>Hi, I&apos;m <span>Sandip Dey</span></h1>
            <h3>I&apos;m a <span>
                {displayedText}
                <span className="cadet">|</span>
            </span></h3>
        </div>
    )
}

TypeWriter.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    typingSpeed: PropTypes.number,
    deletionSpeed: PropTypes.number
};

export default TypeWriter;