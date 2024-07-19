import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const Rheumatism = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Rheumatoid Arthritis (RA) </th>
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
                    <td>Information about signs and symptoms</td>
                    <td>Information about risk factors</td>
                    <td>Alert your GP requesting inflammatory markers blood test</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="too-hard-link-container">
            <Link to="/cellulitis" className="too-hard-link"> Previous</Link>
        </div>
        
        
        </div>
     );
}
 
export default Rheumatism;