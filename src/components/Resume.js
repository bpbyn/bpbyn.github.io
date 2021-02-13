import React from 'react';
import './Resume.css';
import righthand from '../assets/right.png';
import styled from "styled-components";

const RightHand = styled.div`
    :hover {
        background-color: ${({ theme }) => theme.rightHandHover};
    }    
`;

const resume = () => (
    <div className="resume container">
        <div className="hrline"><hr/></div>
            <a href="https://bpbyn.github.io/resume.pdf" target="_blank" rel="noopener noreferrer">
                <RightHand className="righthand">
                    <img src={righthand} alt="right"/>
                    RESUME HERE
                </RightHand>
            </a>
    </div>
);

export default resume;