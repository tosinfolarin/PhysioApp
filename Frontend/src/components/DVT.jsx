import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const DVT = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Deep Vein Thrombosis (DVT) </th>
                </tr>
                <tr>
                    <th>What is it?</th>
                    <th>What are the signs and symptoms?</th>
                    <th>Risk factors</th>
                    <th>What should I do if I suspect I may have this?</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Deep vein thrombosis (DVT) occurs when a blood clot (thrombus) forms in one or more of the deep veins in the body, usually in the legs.</td>
                    <td>Throbbing pain in 1 leg (rarely both legs), usually in the calf or thigh, when walking or standing up
                    <br></br><br></br>swelling in 1 leg (rarely both legs)
                    <br></br><br></br>warm skin around the painful area
                    <br></br><br></br>red or darkened skin around the painful area – this may be harder to see on brown or black skin
                    <br></br><br></br>swollen veins that are hard or sore when you touch them</td>
                    <td>Information about risk factors</td>
                    <td>Go to A&E Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/cancer" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/cellulitis" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
        
     );
}
 
export default DVT;