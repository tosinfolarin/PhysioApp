import { NavLink } from "react-router-dom";

const FAQinfo = () => {
    return (

    <div className ="FAQ-container">
        <div className="FAQ-title">
        <h1><NavLink to="/FAQs"> Frequently Asked Questions </NavLink></h1>
           
        </div>

        

        <div className="outer-fcontainer">
        <div className="flex-fcontainer">

            <div className="flex-fchild box1">
            
        
                <div className="f-heading">Do I need an x-ray or a scan?</div>
                <br/>
                <br/>
                while x-rays are a useful diagnostic tool, they are not always necessary in the initial management of your symptoms. 
                Most patients benefit greatly from exercise-based rehabilitation and physical therapy, which can effectively address pain and improve function. 
                If there is no improvement with these treatments, imaging can then play a crucial role in guiding the next steps of your care.
            </div>
        
    
            <div className="flex-fchild box2">
                <div className="f-heading">How long would this take to get better?</div>
                <br/><br/>
                Recovery times can vary widely from person to person, with no gold standard for how long it will take to get better. 
                The nature and severity of the injury, age, general health, diet, and lifestyle all play significant roles. Younger and healthier individuals tend to recover faster, while compliance with physiotherapy exercises and treatment plans is crucial for a quicker recovery. Acute injuries may improve within a few weeks, whereas chronic conditions or severe injuries can take several months. 
                Every recovery journey is unique.
                <br/>
                
            </div>
        
        </div>
        </div>
    </div>
    );
}
 
export default FAQinfo;

