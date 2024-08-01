import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const Fracture = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Fractures</th>
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
                    <td>A fracture is a partial or complete break in the bone.</td>
                    <td>A visibly out-of-place or misshapen limb or joint
                    <br></br><br></br>Swelling, bruising, or bleeding
                    <br></br><br></br>Intense pain
                    <br></br><br></br>Numbness and tingling
                    <br></br><br></br>Broken skin with bone protruding
                    <br></br><br></br>Limited mobility or inability to move a limb or put weight on the leg.</td>
                    <td>Osteoporosis
                    <br></br><br></br> Recent Trauma
                    <br></br><br></br> Low body weight
                    <br></br><br></br> Smoker
                    <br></br><br></br> Repetitive Impact
                    </td>
                    <td>Go to A&E Immediately </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/pmr" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/cancer" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
     );
}
 
export default Fracture;