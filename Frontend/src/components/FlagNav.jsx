import { Link, NavLink} from "react-router-dom";
import { useState } from "react";

  const FlagNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (  
        <div>
        <nav> 
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
            <NavLink to="/cad"> CAD </NavLink>
            </li>
            <li>
            <NavLink to="/myelopathy"> Myelopathy </NavLink>
            </li>
            <li>
            <NavLink to="/compartment-syndrome"> Compartment Syndrome </NavLink>
            </li>
            <li>
            <NavLink to="/ces"> CES  </NavLink>
            </li>
            <li>
            <NavLink to="/pmr"> PMR </NavLink>
            </li>
            <li>
            <NavLink to="/fractures"> Fractures </NavLink>
            </li>
            <li>
            <NavLink to="/cancer"> Cancer </NavLink>
            </li>
            <li>
            <NavLink to="/dvt"> DVT </NavLink>
            </li>
            <li>
            <NavLink to="/cellulitis"> Cellulitis </NavLink>
            </li>
            <li>
            <NavLink to="/rheumatoid-arthritis"> RA </NavLink>
            </li>
            </ul>
        </nav>
        </div>
        )

  }
   
  export default FlagNav;
  
  
