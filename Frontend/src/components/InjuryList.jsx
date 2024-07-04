import { Link } from "react-router-dom";

const Injuries = () => {
    return ( 
        <div className= "all-injuries">
        <div className ="injuries" role="list">
            
            <Link to="/neck-pain" className="injury-item" role="listitem" aria-labelledby="symptom1">
                <div className="injury-text-container">
                    <h1 className="injury-text">Neck Pain / Stiffness</h1>
                </div>
            </Link>
            

            
                <Link to="/shoulder-pain" className="injury-item" role="listitem" aria-labelledby="symptom2">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Shoulder Pain / Stiffness</h1>
                    </div>
                </Link>
                
          

            
                <Link to="/upper-back-pain" className="injury-item" role="listitem" aria-labelledby="symptom3">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Upper Back Pain / Stiffness</h1>
                    </div>
                </Link>
                
            
        </div>
        
        <div className ="injuries">
            
                <Link to="/lower-back-pain" className="injury-item" role="listitem" aria-labelledby="symptom4">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Lower Back Pain / Stiffness</h1>
                    </div>
                </Link>
                
            

            
                <Link to="/hip-pain" className="injury-item" role="listitem" aria-labelledby="symptom5">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Hip Pain</h1>
                    </div>
                </Link>
                
           

            <div className="injury-item" role="listitem" aria-labelledby="testimonial3">
                <Link to="/thigh-pain" className="injury-item" role="listitem" aria-labelledby="symptom6">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Thigh Pain</h1>
                    </div>
                </Link>
                
            </div>
        </div>


        <div className ="injuries">
        
                <Link to="/knee-pain" className="injury-item" role="listitem" aria-labelledby="symptom7">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Knee</h1>
                    </div>
                </Link>
                
            

            
                <Link to="/calf-pain" className="injury-item" role="listitem" aria-labelledby="symptom8">
                    <div className="injury-text-container">
                        <h1 className="injury-text"> Calf Pain/ Stiffness </h1>
                    </div>
                </Link>
                
            

            
                <Link to="/ankle-pain" className="injury-item" role="listitem" aria-labelledby="symptom9">
                    <div className="injury-text-container">
                        <h1 className="injury-text"> Ankle Pain / Stiffness</h1>
                    </div>
                </Link>
                
            
        </div>

        <div className ="injuries">
        
                <Link to="/foot-pain" className="injury-item" role="listitem" aria-labelledby="symptom3">
                    <div className="injury-text-container">
                        <h1 className="injury-text"> Foot Pain </h1>
                    </div>
                </Link>
                
            

            
                <Link to="/upper-limb-paresthesia" className="injury-item" role="listitem" aria-labelledby="symptom3">
                    <div className="injury-text-container">
                        <h1 className="injury-text">Hands/Arms Pins and needles + Numbness </h1>
                    </div>
                </Link>
                
           

            
                <Link to="/lower-limb-paresthesia" className="injury-item" role="listitem" aria-labelledby="symptom3">
                    <div className="injury-text-container">
                        <h1 className="injury-text"> Legs/Foot Pins and needles + Numbness </h1>
                    </div>
                </Link>
                
            
        </div>

        </div>
     );
}
 
export default Injuries;