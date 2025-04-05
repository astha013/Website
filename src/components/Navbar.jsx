import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">sTaggers</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Tour Manager</Link></li>
          <li><Link to="/apply">Apply</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          <button onClick={() => navigate('/blog')}>Blog</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
