import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MyInjury from "./myInjuryButton";
const HipExercises2 = () => {
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
                            src="https://www.youtube.com/embed/cDLBoUxGAmU"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/O6bVydlEigY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/9dXX7i88Vpo"
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
                            src="https://www.youtube.com/embed/gNvzHTyPujs"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/LOxkaeCcpNQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        <div className="exercise-item">
        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/4TxL5Fn0J1Y"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
        </div>
        </div> 
        


        <div className="complexity-link-container">
                    <div className="too-hard-link-container">
                        <Link to="/hip-pain" className="too-hard-link">Too Hard</Link>
                    </div>
                    <div className="too-easy-link-container">
                        <Link to="/hip-pain/level-3" className="too-easy-link">Too Easy</Link>
                    </div>
                </div>
        </div> 

        );
}
 
export default HipExercises2;