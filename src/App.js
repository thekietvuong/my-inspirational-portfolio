import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
      <BackToTop/>
    </div>
  );
}

export default App;

