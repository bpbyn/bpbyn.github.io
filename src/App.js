import './App.css';

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
import useDarkMode from './components/useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
          <div className="personal-info">
              <Greetings theme={theme}/>
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
