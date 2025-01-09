import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <p className="logo-txt" data-testid="navbar-logo">Movie Surfer</p>
      <nav>
        <Link
          to="/"
          data-testid="link-home"
          className={
            location.pathname === "/" ? "active-link" : "inactive-link"
          }
        >
          Home
        </Link>
        <Link
          to="/movies"
          data-testid="link-movies"
          className={
            location.pathname === "/movies" ? "active-link" : "inactive-link"
          }
        >
          Movies
        </Link>
        <Link
          to="/tvseries"
          data-testid="link-tvseries"
          className={
            location.pathname === "/tvseries" ? "active-link" : "inactive-link"
          }
        >
          TV Series
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
