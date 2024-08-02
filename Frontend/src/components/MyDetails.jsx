import Navbar from "./Navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Details = () => {
    

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    
  
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
        painScale: data.painScale,
        pastMedHistory: data.pastMedHistory,
        
      };
      console.log(formData);
      setSubmitted(true);
  // sends information to the server taking the data from the formData dataset
        axios.post('http://localhost:8080/api/Sign-Up', data ) // Need to crease a different endpoint for this for updating information
        // Then stores the results and redirects the user to the sign in page
        .then(res => 
          {
            console.log(res);
            navigate('/Sign-in')
        })
        .catch(err => console.log(err));
  
      // navigate("/Sign-in"); // Navigate to sign in page
  
  
    };
    
  
    
  
  
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="Sign up">
          <form onSubmit={handleSubmit(submitData)} className="SignUp">
            <h1>My Details</h1>
            
  
            
            <label>Preferred  Name:</label>
            <input type="text" {...register("preferredName")} />
            {errors.preferredName && <span className="errorMessage">{errors.preferredName.message}</span>}
  
            <label>Contact Number:</label>
            <input type="text" {...register("contactNumber")} />
            {errors.contactNumber && <span className="errorMessage">{errors.contactNumber.message}</span>}
  
            <label>Email:</label>
            <input type="email" {...register("email")} />
            {errors.email && <span className="errorMessage">{errors.email.message}</span>}
  
            <label>Password:</label>
            <input type="password" {...register("password")} />
            {errors.password && <span className="errorMessage">{errors.password.message}</span>}
  
            <label>Symptoms Area:</label>
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
  
            <label>On a scale of 0-10, with 10 being the worst, how would you rate the severity of your symptoms?</label>
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
  
            <label>Have you read the Red Flag information?</label>
            <div>
              <input type="radio" id="yes" value="yes" {...register("readInfo")} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" value="no" {...register("readInfo")} />
              <label htmlFor="no">No</label>
            </div>
  
            <label>Please select any conditions you have a history of:</label>
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
      </div>
    );
  };

export default Details;

