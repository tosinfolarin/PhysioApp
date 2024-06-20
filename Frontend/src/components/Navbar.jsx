import { Link } from "react-router-dom";


const Navbar = () => {
    return (  
        
        <div className="navbar">
        <nav className="links">
            <Link to="/" className="Logo"> WaitLess Physio </Link>
            <ul>
            <li>
            <Link to="/"> Home </Link>
            </li>
            <li>
            <Link to="/Injuries"> Injuries </Link>
            </li>
            <li>
            <Link to="/FAQs"> FAQs </Link>
            </li>
            <li>
            <Link to="/MyProfile"> My Profile  </Link>
            </li>
            <li>
            <Link to="/Sign-In"> Sign up/ Sign In </Link>
            </li>
            </ul>
        </nav>
    </div>
        
    );
}


export default Navbar;