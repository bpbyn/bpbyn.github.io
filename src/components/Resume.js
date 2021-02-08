import React from 'react';
import './Resume.css';
import righthand from '../assets/right.png';

const resume = () => (
    <div className="resume container">
        <div className="hrline"><hr/></div>
        <div className="righthand">
            <img src={righthand} alt="right"/>
            RESUME HERE
        </div>
    </div>
);

export default resume;