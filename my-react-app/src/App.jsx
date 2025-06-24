import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Content from './components/Content';
import Contact from './pages/Contact';
import Projects from  './pages/ProjectDetails';
function App() {
  return (
    <Router>
      <Header /> 

      <Routes>
        <Route path="/" element={<h1 style={{ padding: '40px' }}>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />

       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
