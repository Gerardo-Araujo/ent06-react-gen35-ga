import { Link } from "react-router-dom";
import "./PrincipalHeader.css";

const PrincipalHeader = () => {
  return (
    <header className="principal-header-container">
      <h1 className="logo">
        <Link to="/" className="nav-link-princ">Hotels-App</Link>
      </h1>
      <nav className="princ_nav">
        <ul className="princ__items">
          <li className="princ__item">
            <Link to="/reservations" className="nav-link">Reservations</Link>
          </li>
          <li className="princ__item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="princ__item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PrincipalHeader;
