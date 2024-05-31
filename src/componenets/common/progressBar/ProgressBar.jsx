import './ProgressBar.css';
import {useEffect, useState} from "react";

function Progress({ percent , useAnimation, duration, direction }) {
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = percent;
        const step = Math.floor((end - start) / duration);
        const timer = setInterval(() => {
            start += step;
            setPercentage(start);
            if (start >= end) {
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [percent, duration]);

    const progressBarStyle = {
        width: `${useAnimation ? percentage : percent}%`,
        direction: direction === 'rtl' ? 'rtl' : 'ltr'
    };

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={progressBarStyle}>
                <span className="progress-bar-text">{useAnimation ? percentage : percent}%</span>
            </div>
        </div>
    );
}

export default Progress;