import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MyInjury from "./myInjuryButton";
const AnkleExercises2 = () => {
    return ( 
        <div>
        <Navbar/>
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
                            src="https://www.youtube.com/embed/EOka2M4vWAA"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/9bdOZ-1usoM"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/YGPnqHVgohk"
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
                            src="4"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="5"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="6"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        </div>
        </div> 
        


        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/ankle-pain" className="too-hard-link">Too Hard</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/ankle-pain/level-3" className="too-easy-link">Too Easy</Link>
                    </div>
                </div>
        
        </div> 

        );
}
 
export default AnkleExercises2;