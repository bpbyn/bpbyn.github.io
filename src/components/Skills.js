import React from 'react';
import './Skills.css';

const skills = () => (
    <div className="skills container" id="#skills">
        <div className="skills__category">
            <div className="skills__category__label title-color">SKILLS</div>
        </div>
        <div className="skills__wrapper">
            <div className="skills__category">
                <div className="skills__category__label">LANGUAGES
                    <ul>
                        <li className="skills__category__item">Javascript (ES6)</li>
                        <li className="skills__category__item">TypeScript</li>
                        <li className="skills__category__item">HTML</li>
                        <li className="skills__category__item">CSS/Less</li>
                        <li className="skills__category__item">Python</li>
                        <li className="skills__category__item">Java</li>
                    </ul>
                </div>
            </div>        
            <div className="skills__category">
                <div className="skills__category__label">
                    FRAMEWORKS
                    <ul>
                        <li className="skills__category__item">Angular</li>
                        <li className="skills__category__item">React</li>
                        <li className="skills__category__item">Django</li>
                        <li className="skills__category__item">CSS/Less</li>
                        <li className="skills__category__item">Node</li>
                    </ul>
                </div>
            </div>
            <div className="skills__category">
                <div className="skills__category__label">
                    TOOLS
                    <ul>
                        <li className="skills__category__item">Git & Github</li>
                        <li className="skills__category__item">Bash</li>
                        <li className="skills__category__item">Powershell</li>
                        <li className="skills__category__item">PostgreSQL</li>
                        <li className="skills__category__item">Oracle SQL Developer</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default skills;