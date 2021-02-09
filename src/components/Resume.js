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
        <RightHand className="righthand">
            <img src={righthand} alt="right"/>
            RESUME HERE
        </RightHand>
    </div>
);

export default resume;