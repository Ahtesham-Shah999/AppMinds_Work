import '../styles/Header.css'; 
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">Ahtesham<span>Site</span></div>
        <nav className="navigation">
          <Link>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/content">Content</Link>


        </nav>

        <div className="search-cta">
          <input type="text" placeholder="Search..." className="search-box" />
          <button className="cta-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
