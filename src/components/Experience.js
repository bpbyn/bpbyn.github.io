import React from 'react';
import './Experience.css';

const experience = () => (
    <div className="experience container">
        <div className="exp-label title-color">
            EXPERIENCE
        </div>
        <div className="jobs">
            <div className="exp-wrapper">
                <div className="company-timeline">
                    <div className="company">
                        <a href="https://www.dxc.technology/" target="_blank" rel="noopener noreferrer">DXC Technology</a>
                    </div>
                    <div className="timeline">
                        Apr - Present
                    </div>
                </div>
                <div className="role timeline">
                    Technology Consultant II
                </div>
            </div>
            
            <div className="exp-wrapper">
                <div className="company-timeline">
                    <div className="company">
                        <a href="https://www.willistowerswatson.com/" target="_blank" rel="noopener noreferrer">Willis Towers Watson</a>
                    </div>
                    <div className="timeline">
                        Apr - Apr 2019
                    </div>
                </div>
                <div className="role timeline">
                    Software Developer
                </div>
            </div>

            <div className="exp-wrapper">
                <div className="company-timeline">
                    <div className="company">
                        <a href="https://www.reedelsevier.com.ph/" target="_blank" rel="noopener noreferrer">Reed Elsevier Philippines</a>
                    </div>
                    <div className="timeline">
                        Sept - Apr 2017
                    </div>
                </div>
                <div className="role timeline">
                    Programmer
                </div>
            </div>
        </div>    
    </div>
);

export default experience;