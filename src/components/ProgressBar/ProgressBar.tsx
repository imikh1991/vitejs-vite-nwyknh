import React, { useState } from 'react';
import './ProgressBar.css';

const Progress = ({ done }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        };

        setStyle(newStyle);
    }, 1000);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
            </div>
        </div>
    );
};

const ProgressBar = () => (
    <div className="ProgressBar">
        <Progress done="100" />
    </div>
);

export default ProgressBar;
