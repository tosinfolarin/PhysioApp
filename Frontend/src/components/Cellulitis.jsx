import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FlagNav from "./FlagNav";

const Cellulitis = () => {
    return ( 
    
    <div>
        <Navbar/>
        <FlagNav/>
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="4">Cellulitis</th>
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
                    <td>Cellulitis is an infection caused by bacteria getting into the deeper layers of your skin</td>
                    <td>Painful, hot, red, swollen area of skin. 
                        <br></br><br></br>Fever with chills and sweating
                        <br></br><br></br>Fatigue
                        <br></br><br></br>Pain or tenderness in the affected area
                        <br></br><br></br>Hands – causing swelling in your fingers or the back of your hand.
                        <br></br><br></br>Feet – sometimes near toes if you have athlete's foot.
                        <br></br><br></br>Legs – usually the lower legs.
                        <br></br><br></br>Eye – which is very serious. The white part of your eye may become red, but this does not always happen.</td>
                    <td>Cracks or peeling skin between the toes
                    <br></br><br></br>History of peripheral vascular disease
                    <br></br><br></br>Injury or trauma with a break in the skin
                    <br></br><br></br>Insect/ Animal bites and stings
                    <br></br><br></br>Ulcers from certain diseases, including diabetes and vascular disease
                    <br></br><br></br>Corticosteroid medicines or other medicine use that suppress the immune system
                    <br></br><br></br>Wound from a recent surgery</td>
                    <td>Alert your GP Immediately</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/dvt" className="too-hard-link">Previous</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/rheumatoid-arthritis" className="too-easy-link">Next</Link>
                    </div>
                </div>
        
        
        </div>
     );
}
 
export default Cellulitis;