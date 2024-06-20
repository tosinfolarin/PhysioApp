import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        
        <div className="navbar">
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/Injuries"> Injuries </Link>
            <Link to="/FAQs"> FAQs </Link>
            <Link to="/MyProfile"> My Profile  </Link>
            <Link to="/Sign-In"> Sign up/ Sign In </Link>
            
        </div>
    </div>
        
    );
}


export default Navbar;