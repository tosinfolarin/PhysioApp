import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Slogan from "./SloganText";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (  
        <div>
        <nav> 
            <Link to="/" className="title"> WaitLess Physio </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
            <li>
            <NavLink to="/"> Home </NavLink>
            </li>
            <li>
            <NavLink to="/Injuries"> Symptoms </NavLink>
            </li>
            <li>
            <NavLink to="/FAQs"> FAQs </NavLink>
            </li>
            <li>
            <NavLink to="/MyProfile"> My Profile  </NavLink>
            </li>
            <li>
            <NavLink to="/Sign-In"> Log In </NavLink>
            </li>
            </ul>
        </nav>
            <Slogan/>
        </div>
    
    
    );
}


export default Navbar;