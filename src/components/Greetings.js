import React, { useEffect, useRef } from 'react';
import './Greetings.css';
import wave from '../assets/waving-hand.png';
import styled from "styled-components";

const Greet = styled.p`
    color: ${({ theme }) => theme.greetingsColor};    
`;

const Link = styled.a`
    color: ${({ theme }) => theme.greetingsColor};    
    text-decoration: none;
    line-height: 2;
`;

const Greetings = () => {
    const ref = useRef(null);

    const waveOnLoad = (node) => {
      node.classList.add('wave-onload');
      setTimeout(function() {
        node.classList.remove('wave-onload');
      }, 2000);
    }

    useEffect(() => {
      const node = ref.current;
      waveOnLoad(node);
      
      node.addEventListener('mouseover', () => node.classList.add('wave-onload'));
      node.addEventListener('mouseout', () => node.classList.remove('wave-onload'));

      return () => {
        node.removeEventListener('mouseover', () => node.classList.add('wave-onload'));
        node.removeEventListener('mouseout', () => node.classList.remove('wave-onload'));
      }
    },[]);

    return (
      <div className="greetings container">
        <div className="greetings__hello">
          Hello, 
          <img 
            ref={ref}
            className="wave"
            src={wave} 
            alt="wave"/><br/>
          I'm Brian.
        </div>
        <Greet className="greetings__details">
          I'm a Technology Consultant II currently working for {' '}
          <strong>
            <Link href="https://www.dxc.technology/" target="_blank" rel="noopener noreferrer">DXC Technology</Link>
          </strong>
          . I like learning new technologies specifically with web development. 
        </Greet>
        <Greet className="greetings__details">
          Lately, I've been learning React a lot and I find myself really interested to it. 
          I've made this project to further heighten my knowledge and skills with React. 
          I hope you like it! 
        </Greet>

        <Greet className="greetings__details">
          <strong><u>When I'm not working</u></strong>, I usually do stuff like recording bedroom music, 
          jogging (health is wealth!) and hanging out with friends. Cheers!
        </Greet>
        
      </div>
    );
};


export default Greetings;

