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
                    <td>Rheumatoid Arthritis is an autoimmune disease which causes the body to produce an inflammatory response at the joints.</td>
                    <td>Pain, swelling, stiffness and tenderness in more than one joint. (Likely mirroring the opposite side)
                        <br></br><br></br>Stiffness, especially in the morning or after sitting for long periods.
                        <br></br><br></br>Pain and stiffness in the same joints on both sides of your body.
                        <br></br><br></br>Fatigue
                        <br></br><br></br>Weakness
                        <br></br><br></br>Fever</td>
                    <td>Family History of Rheumatoid Arthritis
                    <br></br><br></br> Your sex. Women are more likely than men to develop rheumatoid arthritis.
                    <br></br><br></br>Age - Most commonly begins in middle age
                    <br></br><br></br>Smoking - Smoking also appears to be associated with greater disease severity.
                    <br></br><br></br> Overweight
                    </td>
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