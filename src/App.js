import './styles/App.css';
import About from "./component/About"
import Navbar from "./component/Navbar"
import Projects from './component/Projects'
import Skills from './component/Skills'
import Contact from './component/Contact'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
