import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const CaudaEquina = () => {
    return ( 
    
    <div>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4"> Cauda Equina Syndrome (CES) </th>
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
                    <td>Cauda Equina Syndrome (CES) is compression of the spinal nerves towards the bottom of the spinal cord. It is often linked with back pain</td>
                    <td>Loss of feeling or pins and needles between your inner thighs or genitals
                    <br></br><br></br>Numbness in or around your back passage or buttocks
                    <br></br><br></br>Altered feeling when using toilet paper to wipe yourself
                    <br></br><br></br>Increasing difficulty when you try to urinate
                    <br></br><br></br>Increasing difficulty when you try to stop or control your flow of urine
                    <br></br><br></br>Loss of sensation when you pass urine
                    <br></br><br></br>Unaware of leaking urine or recent need to use pads
                    <br></br><br></br>Not knowing when your bladder is either full or empty
                    <br></br><br></br>Inability to stop bowel movement or being unaware of leaking
                    <br></br><br></br>Loss of sensation when you pass a bowel motion
                    <br></br><br></br>Change in ability to achieve an erection or ejaculate
                    <br></br><br></br>Loss of sensation in genitals during sexual intercourse
                </td>
                    <td>Disc herniations in the lower back
                    <br></br><br></br> Trauma to the back
                    <br></br><br></br> Spinal Tumours
                    <br></br><br></br> Spinal Stenosis (rare)
                    <br></br><br></br> Vertebral fractures resulting from osteoporosis (rare)
                    </td>
                    <td>Go to A&E Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/compartment-syndrome" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/pmr" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
        
     );
}
 
export default CaudaEquina;