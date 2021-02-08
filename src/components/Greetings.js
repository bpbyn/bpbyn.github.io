import React, { useEffect, useRef } from 'react';
import './Greetings.css';
import wave from '../assets/waving-hand.png';

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
        <p className="greetings__details">
          I'm a Technology Consultant II currently working for {' '}
          <strong>
            <a href="https://www.dxc.technology/" target="_blank" rel="noopener noreferrer">DXC Technology</a>
          </strong>
          . I like learning new technologies specifically with web development. 
        </p>

        <p className="greetings__details">
          <strong><u>When I'm not working</u></strong>, I usually do stuff like recording bedroom music, 
          jogging (health is wealth!) and hanging out with friends. Cheers!
        </p>
        
      </div>
    );
};


export default Greetings;

