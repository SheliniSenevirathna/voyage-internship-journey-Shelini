import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import './Header.css';
import './Contact.css';
import './Footer.css';
import './Projects.css';
import './App.css';
import './style.css';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
