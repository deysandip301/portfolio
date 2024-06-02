import './ProgressBar.css';
import { useEffect, useState } from "react";

function ProgressBar({ percent, useAnimation, duration, direction, bgColor}) {
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        if (useAnimation) {
            let start = 0;
            const end = percent;
            const step = (end - start) / duration;
            const timer = setInterval(() => {
                start += step;
                setPercentage(Math.min(start, end));
                if (start >= end) {
                    clearInterval(timer);
                }
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setPercentage(percent);
        }
    }, [percent, duration, useAnimation]);

    const progressBarStyle = {
        width: `${percentage}%`,
        backgroundColor: bgColor
    };

    const progressBarContainerClass = direction === 'rtl' ? 'progress-bar-container progress-bar-rtl' : 'progress-barj-container';

    return (
        <div className={progressBarContainerClass}>
            <div className={"progress-bar"} style={progressBarStyle}>
                <span className="progress-bar-text">{percentage}%</span>
            </div>
        </div>
    );
}

export default ProgressBar;