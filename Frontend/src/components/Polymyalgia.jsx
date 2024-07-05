import Navbar from "./Navbar";
import { Link} from "react-router-dom";
import FlagNav from "./FlagNav";

const Polymyalgia = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Polymyalgia Rheumatica (PMR)</th>
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
                    <td>Information about actions to take</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/ces" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/fractures" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
     );
}
 
export default Polymyalgia;