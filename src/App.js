
import './App.css';
import Navbar from "../src/components/navbar/Navbar"
import Landing from './components/landing/Landing';
import About from './components/about/About';
import { Education } from './components/education/Education';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Achivement from './components/achivement/Achivement';
import Blog from './components/blogs/Blog';
import Contacts from './components/contacts/Contacts';
import BackToTop from './components/backToTop/BackToTop';
import Footer from './components/footer/Footer';
// import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Achivement />
      <Blog />
      <Contacts />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
