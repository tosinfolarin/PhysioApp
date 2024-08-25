import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Slogan from "./SloganText";
import axios from "axios";


const ProfileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    // function to handle the logout property
    const handleLogOut =  () => {
        axios.get('http://localhost:8080/api/LogOut')
        .then(res => {
        if(res.data.Status === "Success"){
        location.reload(true);
        } else {
        alert("error");
        }
        }).catch( err => console.log(err))
    }

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
            <NavLink className="LogoutButton" to="/Sign-In" onClick={handleLogOut}> Log Out </NavLink> 
            </li>
            </ul>
        </nav>
            <Slogan/>
        </div>
    
    
    );
}


export default ProfileNav;