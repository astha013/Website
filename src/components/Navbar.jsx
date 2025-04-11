import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">sTaggers</Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {/* Close icon for mobile */}
          <span className="close-icon" onClick={() => setIsMobileMenuOpen(false)}>✖</span>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/tourmanager" onClick={() => setIsMobileMenuOpen(false)}>Tour Manager</Link></li>
          <li><Link to="/career" onClick={() => setIsMobileMenuOpen(false)}>Career</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}><button>Blog</button></Link></li>
        </ul>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
