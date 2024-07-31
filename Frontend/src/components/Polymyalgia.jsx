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
                    <td>Polymyalgia rheumatica is a condition that causes pain, stiffness and inflammation in the muscles around the shoulders, neck and hips.</td>
                    <td>Extreme tiredness
                    <br></br><br></br>Loss of appetite
                    <br></br><br></br>Weight loss
                    <br></br><br></br>Depression
                    <br></br><br></br>Morning Stiffness >45 minutes</td>
                    <td>There is no known true cause of PMR however, it is thought to be an inflammatory condition which may stem from environmental triggers such as a virus
                    <br></br><br></br>Certain genes may also predispose you to development of this condition.
                    </td>
                    <td>Alert your GP Immediately</td>
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