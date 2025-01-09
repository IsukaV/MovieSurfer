import { Link,useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <p className="logo-txt">Movie Surfer</p>  
            <nav>
                <Link to="/" className={location.pathname === "/" ? "active-link" : "inactive-link"} >Home</Link>
                <Link to="/movies" className={location.pathname === "/movies" ? "active-link" : "inactive-link"} >Movies</Link>
                <Link to="/tvseries" className={location.pathname === "/tvseries" ? "active-link" : "inactive-link"} >TV Series</Link>
               
            </nav>
        </div>
    )
}

export default Navbar;