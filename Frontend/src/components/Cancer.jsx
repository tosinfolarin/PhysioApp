import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const Cancer = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        

        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Cancer</th>
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
                    <td>Fatigue
<br></br>Lump or area of thickening that can be felt under the skin
<br></br>Weight changes, including unintended loss or gain
<br></br>Skin changes, such as yellowing, darkening or redness of the skin, sores that won't heal, or changes to existing moles
<br></br>Changes in bowel or bladder habits
<br></br>Persistent cough or trouble breathing
<br></br>Difficulty swallowing
<br></br>Hoarseness
<br></br>Persistent indigestion or discomfort after eating
<br></br>Persistent, unexplained muscle or joint pain
<br></br>Persistent, unexplained fevers or night sweats
<br></br>Unexplained bleeding or bruising</td>
                    <td>Lifestyle factors - Smoking, a high-fat diet, and working with toxic chemicals
                    <br></br> Family history, inheritance, and genetics 
                    <br></br>Exposures to certain viruses - Epstein-Barr virus and HIV, the virus that causes AIDS, have been linked to an increased risk of developing certain childhood cancers
                    </td>
                    <td>Alert your GP Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/fractures" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/dvt" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
     );
}
 
export default Cancer;