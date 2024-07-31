import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const CompartmentSyndrome = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Compartment Syndrome</th>
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
                    <td>Information about what it is</td>
                    <td>pain in a muscle – this could feel like a burning pain or a deep ache with movement making the pain worse.
<br></br><br></br>swelling or bulging of the muscle
<br></br><br></br>numbness, weakness or pins and needles
<br></br><br></br>tightness or difficulty moving the affected body part</td>
                    <td>Information about risk factors</td>
                    <td>Alert your GP Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/myelopathy" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/ces" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
        
     );
}
 
export default CompartmentSyndrome;