import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MyInjury from "./myInjuryButton";
const LowerBackExercises = () => {
    return ( 
        <div>
        <Navbar/>
        <MyInjury/>

        



        <div className="exercise-container">
        <header className="header">
            <h1>Level 1</h1>
        </header>
        <div class="exercise-grid">
            <div className="exercise-item">Exercise Video 1</div>
            <div className="exercise-item">Exercise Video 2</div>
            <div className="exercise-item">Exercise Video 3</div>
        </div>
        <div class="exercise-grid">
            <div className="exercise-item">Exercise Video 4 </div>
            <div className="exercise-item">Exercise Video 5</div>
            <div className="exercise-item">Exercise Video 6</div>
        </div>
        </div> 
        
        <div className="too-easy-link-container">
            <Link to="/lower-back-pain/level-2" className="too-easy-link">Too Easy</Link>
        </div>
        
        </div> 

        );
}
 
export default LowerBackExercises;