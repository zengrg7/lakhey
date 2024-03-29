// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../assets/Images/lakhey logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Navbar = () => {
  const activePage = ({ isActive }) => {
    if (isActive) {
      return "active-page";
    }
  };

  return (
    <div className="w-100 navbar">
      <Container>
        <div className="lakhey-navbar">
          <div className="lakhey-navbar-links-logo">
            <NavLink to="/" className={activePage}>
              <img src={logo} alt="logo" width={20} height={20} />
            </NavLink>
          </div>
          <div className="lakhey-navbar-links-container">
            <p>
              <NavLink to="/" className={activePage}>
                Home
              </NavLink>
            </p>
            <p>
              <NavLink to="/about" className={activePage}>
                About
              </NavLink>
            </p>
            <p>
              <NavLink to="/shop" className={activePage}>
                Shop
              </NavLink>
            </p>
            <p>
              <NavLink to="/contact" className={activePage}>
                Contact
              </NavLink>
            </p>
          </div>
          <div className="lakhey-navbar-sign d-flex gap-2">
            <Button variant="outline-danger sign-up">Sign Up</Button>
            <Button variant="danger sign-in">Sign In</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
