import { useEffect } from "react"
import { useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();

    useEffect(() => {

    }, [] )

    return (
        <div className="navbar">
            <p className="logo-txt">Movie Surfer</p>  
            <nav>
                <a href="/" className={location.pathname === "/" ? "active-link" : "inactive-link"} >Home</a>
                <a href="/movies" className={location.pathname === "/movies" ? "active-link" : "inactive-link"} >Movies</a>
                <a href="/tvseries" className={location.pathname === "/tvseries" ? "active-link" : "inactive-link"} >TV Series</a>
               
            </nav>
        </div>
    )
}

export default Navbar;