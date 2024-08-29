import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"



const Details = () => {
    

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const [auth, setAuth] = useState('') // This checks whether the user is logged in or not, if the user clicks logout it is activated
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pastMedHistory, setPastMedHistory] = useState('')
    const [painScore, setPainScore] = useState('')
    const [contactNumber, setContactNumber] = useState ('')
    const [email, setEmail] = useState ('')
    const [bodyPart, setBodyPart] = useState ('')
    
  
    const schema = z.object({
      
      preferredName: z.string().min(2, { message: "Preferred name must be at least 2 characters long" }).max(30),
      // age: z.number().min(17, { message: "You must be at least 17 years old to use this application. Younger patients require pediatric involvement" }).max(120, { message: "Please enter a valid age" }),
      email: z.string().email({ message: "Please enter a valid email address" }),
      contactNumber: z.string().min(1, { message: "Phone number is required" })
        .regex(/^\d+$/, { message: "Please enter a valid phone number" }),
      password: z.string().min(8, { message: "Password must be at least 8 characters long" })
        .max(100, { message: "Password must be at most 100 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" }),
      bodyPart: z.array(z.string()).nonempty({ message: "Please select an area where you experience your symptoms" }),
      painScale: z.string().nonempty({ message: "Please rate your pain on a scale of 0-10" }),
      
      pastMedHistory: z.array(z.string()).optional()
  
    });
    
  
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  
    const submitData = (data) => {
      const formData = {
    
        preferredName: data.preferredName,
        contactNumber: data.contactNumber,
        email: data.email,
        password: data.password,
        bodyPart: data.bodyPart,
        painScore: data.painScore,
        pastMedHistory: data.pastMedHistory,
        
        
      };
      console.log(formData);
      setSubmitted(true);
  
    };

    useEffect(()=> {
    
      axios.get('http://localhost:8080/api/MyProfile')
      .then(res => { 
        if(res.data.valid){
          setAuth(true);
          setName(res.data.name);
          setFirstName(res.data.firstName)
          setLastName(res.data.lastName)
          setEmail(res.data.email)
          setPastMedHistory(res.data.pastMedHistory)
          setPainScore(res.data.painScore)
          setContactNumber(res.data.contactNumber)
          setBodyPart(res.data.bodyPart)
          console.log(data)
        } else { // This will run if the user is unable to sign in/ or the user logs out
          setAuth(false); 
          console.log('User is not signed in');
          navigate('/Sign-In');
        }
        
      })
      //if there is an error this will log the error to the console
      .catch(err => console.log(err))
    },[])
  
    return (
      <div>
        
        <div className="Sign up">
          <form onSubmit={handleSubmit(submitData)} className="SignUp">
            <h1>My Details</h1>
            
  
            
            <label>Preferred  Name: {name} <button type="button">Edit</button> </label> 
            <input type="text"  {...register("preferredName" ) } /> 
            {errors.preferredName && <span className="errorMessage">{errors.preferredName.message}</span>}
  
            <label>Contact Number: {contactNumber} <button type="button">Change Contact Number</button> </label>
            <input type="text" {...register("contactNumber")} />
            {errors.contactNumber && <span className="errorMessage">{errors.contactNumber.message}</span>}
  
            <label>Email: {email} <button type="button">Edit</button> </label>
            <input type="email" {...register("email")} />
            {errors.email && <span className="errorMessage">{errors.email.message}</span>}
  
            <label>Password: <button type="button">Change Password</button> </label>
            <input type="password" {...register("password")} />
            {errors.password && <span className="errorMessage">{errors.password.message}</span>}
  
            <label>Symptoms Area: {bodyPart}  <button type="button">Choose new area(s)</button> </label>
            <div>
              <input type="checkbox" id="neck" value="neck" {...register("bodyPart")} />
              <label htmlFor="neck">Neck</label>
              <input type="checkbox" id="shoulder" value="shoulder" {...register("bodyPart")} />
              <label htmlFor="shoulder">Shoulder</label>
              <input type="checkbox" id="elbow" value="elbow" {...register("bodyPart")} />
              <label htmlFor="elbow">Elbow</label>
              <input type="checkbox" id="wrist" value="wrist" {...register("bodyPart")} />
              <label htmlFor="wrist">Wrist/Hand</label>
              <input type="checkbox" id="back" value="back" {...register("bodyPart")} />
              <label htmlFor="back">Back</label>
              <input type="checkbox" id="hip" value="hip" {...register("bodyPart")} />
              <label htmlFor="hip">Hip</label>
              <input type="checkbox" id="knee" value="knee" {...register("bodyPart")} />
              <label htmlFor="knee">Knee</label>
              <input type="checkbox" id="ankle" value="ankle" {...register("bodyPart")} />
              <label htmlFor="ankle">Ankle/Foot</label><br/>
              <input type="checkbox" id="lowerlimb" value="lower limb paresthesia" {...register("bodyPart")} />
              <label htmlFor="lowerlimb">Upper Limb Pins and Needles/Numbness</label> <br/>
              <input type="checkbox" id="upperlimb" value="upper limb paresthesia" {...register("bodyPart")} />
              <label htmlFor="upperlimb">Lower Limb Pins and Needles/Numbness</label>
            </div>
  
            <label>When starting the application, you scored your pain a {painScore}/10, please feel free to update this score. </label>
            <select {...register("painScale")}>
              <option value=""></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
  
            
  
            <label>You have logged having {pastMedHistory} as part of your medical history, Feel free to edit this section.</label>
            <div>
              <input type="checkbox" id="thyroid" value="thyroid" {...register("pastMedHistory")} />
              <label htmlFor="thyroid">Thyroid</label>
              <input type="checkbox" id="heart" value="heart" {...register("pastMedHistory")} />
              <label htmlFor="heart">Heart</label>
              <input type="checkbox" id="rheumatism" value="rheumatism" {...register("pastMedHistory")} />
              <label htmlFor="rheumatism">Rheumatism</label>
              <input type="checkbox" id="epilepsy" value="epilepsy" {...register("pastMedHistory")} />
              <label htmlFor="epilepsy">Epilepsy</label>
              <input type="checkbox" id="diabetes" value="diabetes" {...register("pastMedHistory")} />
              <label htmlFor="diabetes">Diabetes</label>
              <input type="checkbox" id="stroke" value="stroke" {...register("pastMedHistory")} />
              <label htmlFor="stroke">Stroke</label>
              <input type="checkbox" id="high-cholesterol" value="high-cholesterol" {...register("pastMedHistory")} />
              <label htmlFor="high-cholesterol">High Cholesterol</label>
              <input type="checkbox" id="blood-pressure" value="blood-pressure" {...register("pastMedHistory")} />
              <label htmlFor="blood-pressure">Blood Pressure</label>
              <input type="checkbox" id="cancer" value="cancer" {...register("pastMedHistory")} />
              <label htmlFor="cancer">Cancer</label>
            </div>
    
            <input type="submit" />
  
            
          </form>

        </div>
          <div>
            <div className="too-easy-link-container">
              <Link to="/MyProfile" className="too-easy-link">Back to my Journal</Link>
            </div>
        </div>
        </div>
      
    );

    
  };

export default Details;

