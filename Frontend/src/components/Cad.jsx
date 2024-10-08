import FlagNav from "./FlagNav";
import { Link } from "react-router-dom";

const CAD = () => {
    return ( 
        
    <div>
        <FlagNav/>
  

        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Cervical Artery Dysfunction (CAD)</th>
                </tr>
                <tr>
                    <th>What is it?</th>
                    <th>What are the signs and symptoms </th>
                    <th>Risk factors</th>
                    <th>What should I do if I suspect I may have this?</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CAD is a reference to a number of potential early signs of artery Dysfunction</td>
                    <td>Dizziness, Double Vision (Diplopia), Swallowing Difficulties (Dysphagia), Speach Difficulties (Dysarthria), Nausea, Fascial Numbness, Staggering eyes (Nystagmus)</td>
                    <td>Past history of trauma to cervical spine / cervical vessels
                    <br></br><br></br>History of migraine-type headache 
                    <br></br><br></br>High blood pressure, High cholesterol, 
                    <br></br><br></br>Cardiac disease, vascular disease, previous cerebrovascular accident or transient ischaemic attack
                    <br></br><br></br>Diabetes, Blood clotting disorders, Anticoagulant therapy
                    <br></br><br></br>Long-term use of steroids, History of smoking, Recent infection, Immediately post-partum, Head or neck trauma</td>
                    <td>Go to A+E Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="too-easy-link-container">
            <Link to="/myelopathy" className="too-easy-link">Next</Link>
        </div>

        </div>
     );
}
 
export default CAD;


     
   
 