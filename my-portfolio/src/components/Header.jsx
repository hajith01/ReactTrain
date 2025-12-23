import { NavLink } from "react-router-dom";
import "./Header.css"; // we'll create this next

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <h2 className="logo">My Portfolio</h2>

        <nav className="nav-links">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/projects" className="link">Projects</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;
