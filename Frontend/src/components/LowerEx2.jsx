import { Link } from "react-router-dom";
import MyInjury from "./myInjuryButton";
const LowerExercises2 = () => {
    return ( 
        <div>
        <MyInjury/>

       



        <div className="exercise-container">
        <header className="header">
            <h1>Peroneal (anterior lower leg and foot Pins and needles/numbness/pain/burning) </h1>
        </header>
        <div className="exercise-grid">
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/McU92uFu8j0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/lGCTHHpI8-k"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/KOaDWujwbmQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        </div>
        <div className="exercise-grid">
            
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/EHiuJfmmpeo"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/UOYvAsEdLVM"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/QEILIo9Kzlw"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        </div>
        </div> 
        


        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/lower-limb-paresthesia" className="too-hard-link">Previous Exercises</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/lower-limb-paresthesia/level-3" className="too-easy-link">Next Exercises</Link>
                    </div>
                </div>
        
        </div> 

        );
}
 
export default LowerExercises2;