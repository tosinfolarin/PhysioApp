import { Link } from "react-router-dom";
import MyInjury from "./myInjuryButton";
const CalfExercises2 = () => {
    return ( 
        <div>
        <MyInjury/>

        



        <div className="exercise-container">
        <header className="header">
            <h1>Level 2</h1>
        </header>
        <div className="exercise-grid">
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
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/8W8XRJcSZOc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/1Sx3_b3lcBA"
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
                            src="https://www.youtube.com/embed/zKqcL6HSTE4"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/ZrYPt_pBces"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Ovzq9hlKOSk"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        </div>
        </div> 
        


        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/calf-pain" className="too-hard-link">Too Hard</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/calf-pain/level-3" className="too-easy-link">Too Easy</Link>
                    </div>
                </div>
        
        </div> 

        );
}
 
export default CalfExercises2;