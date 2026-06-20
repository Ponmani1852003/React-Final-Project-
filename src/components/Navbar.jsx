import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🍽 Foodies Restaurant
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
        >
          Services
        </NavLink>

        <NavLink
          to="/menu"
          onClick={closeMenu}
        >
          Menu
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>

        <NavLink
          to="/profile"
          onClick={closeMenu}
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;