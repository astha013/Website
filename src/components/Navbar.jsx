import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const YourComponent = () => {
  const navigate = useNavigate();
}

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
          <li><Link to="/blog"><button>Blog</button></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
