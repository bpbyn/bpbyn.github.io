import React from 'react';
import './Projects.css';
import wip from  '../assets/work-in-progress.png'

const projects = () => (
    <>
    <div className="projects container">
        <div className="projects-label title-color">
            PROJECTS 
        </div> 
        <div className="projects-list">
            <div className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </div>
            <div className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </div>                      
        </div> 
    </div>
    {/* JUST ADDITIONAL FLEXBOX FOR FUTURE USE */}
    <div className="projects container" style={{justifyContent:'space-between'}}>
        <div></div>
        <div className="projects-list-item-rectangle" >
            <img src={wip} alt="wip"/>
            <span>Work In Progress</span>
        </div>   
    </div>
    <div className="projects container">
        <div className="projects-label title-color" style={{visibility: 'hidden'}}>
            PROJECTS 
        </div> 
        <div className="projects-list">
            <div className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </div>
            <div className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </div>                      
        </div> 
    </div>
    </>
);

export default projects;
