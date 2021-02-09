import './App.css';
import Experience from './components/Experience';
import Greetings from './components/Greetings';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="personal-info">
          <Greetings/>
          <Navigation/>
          <Contact/>
      </div>
      <div className="grid-container">
        <div className="professional-info">
          <div className="switch">
            <button></button>
          </div>
          <Experience/>
          <Skills/>
          <Resume/>
          <Projects/>


        </div>
      </div>
    </div>
  );
}

export default App;
