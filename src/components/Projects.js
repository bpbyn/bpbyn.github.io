import React from 'react';
import './Projects.css';
import wip from  '../assets/work-in-progress.png';
import styled from "styled-components";

const Box = styled.div`
    background-color: ${({ theme }) => theme.boxColor}; 
`;

const projects = () => (
    <>
    <div className="projects container">
        <div className="projects-label title-color">
            PROJECTS 
        </div> 
        <div className="projects-list">
            <Box className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </Box>
            <Box className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </Box>                      
        </div> 
    </div>
    {/* JUST ADDITIONAL FLEXBOX FOR FUTURE USE */}
    <div className="projects container" style={{justifyContent:'space-between'}}>
        <div className="projects-label title-color" style={{visibility: 'hidden', marginLeft:'30px'}}>
            PROJECTS 
        </div> 
        <Box className="projects-list-item-rectangle" >
            <img src={wip} alt="wip"/>
            <span>Work In Progress</span>
        </Box>   
    </div>
    <div className="projects container">
        <div className="projects-label title-color" style={{visibility: 'hidden'}}>
            PROJECTS 
        </div> 
        <div className="projects-list">
            <Box className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </Box>
            <Box className="projects-list-item">
                <img src={wip} alt="wip"/>
                <span>Work In Progress</span>
            </Box>                      
        </div> 
    </div>
    </>
);

export default projects;
