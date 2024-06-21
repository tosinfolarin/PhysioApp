import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (  
        
        <nav> 
            <Link to="/" className="title"> WaitLess Physio </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
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
            <NavLink to="/Injuries"> Injuries </NavLink>
            </li>
            <li>
            <NavLink to="/FAQs"> FAQs </NavLink>
            </li>
            <li>
            <NavLink to="/MyProfile"> My Profile  </NavLink>
            </li>
            <li>
            <NavLink to="/Sign-In"> Sign up/ Sign In </NavLink>
            </li>
            </ul>
        </nav>
    
        
    );
}


export default Navbar;