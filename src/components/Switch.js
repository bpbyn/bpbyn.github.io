import React from 'react'
import './Switch.css';
import styled from 'styled-components';
import sun from '../assets/full-sun.png';
import moon from '../assets/full-moon.png';

const Toggle = styled.button`
    border: none;
    outline: none;
    border-radius: 30px;
    cursor: pointer;
    width: 75px;
    height: 35px;
    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-color: ${({ lightTheme }) => lightTheme ? '#D3D3D3' : '#BAE67E'};

    img {
        height: 35px;
        width: 35px;
        padding: 2px;
        transition: all 0.1s ease-in-out;
        object-fit: contain;

        // sun icon
        &:first-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(40px)'};
            visibility: ${({ lightTheme }) => lightTheme ? 'visible' : 'hidden'};

        }
        
        // moon icon
        &:nth-child(2) {
            transform: ${({ lightTheme }) => lightTheme ? 'translateX(30px)' : 'translateX(0px)'};
            visibility: ${({ lightTheme }) => lightTheme ? 'hidden' : 'visible'};
        }
        
    }

`;


const Switch = ({theme, toggleTheme}) => {
    const isLight = theme === 'light';

    return (
        <div className="switch container">
            <div></div>
            <Toggle lightTheme={isLight} onClick={toggleTheme}>
                <img src={sun} alt="sun"/>
                <img src={moon} alt="moon"/>

            </Toggle>
        </div>  
    )
}

export default Switch
