// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const Myelopathy = () => {
    return ( 
    
    <div>
        {/* <Navbar/> */}
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Myelopathy</th>
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
                    <td>Myelopathy is a an injury to the spinal cord due to severe compression. This can be obtained by trauma, you can be born with it or it can be cause by degenerative disc disease or disc herniation.</td>
                    <td>Pain in the lower back, neck, arm or leg. <br></br>Tingling, numbness or weakness.
                    <br></br><br></br>Decreased fine motor skills, balance, and coordination.
                    <br></br><br></br>Abnormal or increased reflexes in extremities.
                    <br></br><br></br>Difficulty walking.
                    <br></br>Loss of bowel or bladder function.</td>
                    <td>Age  <br></br>
                    <br></br>A physically demanding occupation
                    <br></br><br></br>Previous neck injuries
                    <br></br><br></br>Genetic factors
                    <br></br><br></br>Tobacco use</td>
                    <td>Go to A&E Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/cad" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/compartment-syndrome" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
     );
}
 
export default Myelopathy;