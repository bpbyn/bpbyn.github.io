import './App.css';
import { useState } from 'react';

import Experience from './components/Experience';
import Greetings from './components/Greetings';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';
import Switch from './components/Switch';

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <div className="personal-info">
              <Greetings/>
              <Navigation/>
              <Contact/>
          </div>
          <div className="grid-container">
            <div className="professional-info">      
              <Switch theme={theme} toggleTheme={toggleTheme} />
              <Experience/>
              <Skills/>
              <Resume/>
              <Projects/>
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>  
  );
}

export default App;
