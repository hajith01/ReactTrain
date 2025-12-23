import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contacts from './pages/Contact.jsx';
import { Routes, Route } from "react-router-dom";


function App() {
  return (

      <div className="app-wrapper">
        <Header/>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </div>
        <Footer/>
      </div>
      
  );
}

export default App;
