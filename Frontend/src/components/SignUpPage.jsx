import Navbar from "./Navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const schema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }).max(30),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }).max(30),
    email: z.string().email({ message: "Please enter a valid email address" }),
    age: z.number().min(17, { message: "You must be at least 16 years old to use this application." }).max(120, { message: "Please enter a valid age" }),
    contactNumber: z.string().min(11, { message: "Please enter a valid contact number" }).max(16),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      preferredName: data.preferredName,
      email: data.email,
      age: data.age,
      contactNumber: data.contactNumber,
      bodyPart: data.bodyPart,
      painScale: data.painScale,
      readInfo: data.readInfo,
      
    };
    console.log(formData);
    setSubmitted(true);
    navigate("/exercises"); // Navigate to exercises page
  };

  if (submitted) {
    return (
      <div className="thank-you-message">
        <h2>As you have mentioned you have ... and you score your pain a ..., the level ... exercises will be the best suit for you </h2>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="Sign up">
        <form onSubmit={handleSubmit(submitData)} className="SignUp">
          <h1>Sign Up</h1>
          <h3>Please sign up if you do not already have an account.</h3>
          
          <label>First Name:</label>
          <input type="text" {...register("firstName")} />
          {errors.firstName && <span className="errorMessage">{errors.firstName.message}</span>}

          <label>Last Name:</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && <span className="errorMessage">{errors.lastName.message}</span>}
          
          <label>Preferred  Name:</label>
          <input type="text" {...register("preferredName")} />
          {errors.preferredName && <span className="errorMessage">{errors.preferredName.message}</span>}

          <label>Age:</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <span className="errorMessage">{errors.age.message}</span>}

          <label>Contact Number:</label>
          <input type="text" {...register("contactNumber")} />
          {errors.contactNumber && <span className="errorMessage">{errors.contactNumber.message}</span>}

          <label>Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && <span className="errorMessage">{errors.email.message}</span>}

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
            <input type="checkbox" id="neck" value="neck" {...register("bodyPart")} />
            <label htmlFor="neck">Thyroid</label>
            <input type="checkbox" id="shoulder" value="shoulder" {...register("bodyPart")} />
            <label htmlFor="shoulder">Heart</label>
            <input type="checkbox" id="elbow" value="elbow" {...register("bodyPart")} />
            <label htmlFor="elbow">Rheumatism</label>
            <input type="checkbox" id="wrist" value="wrist" {...register("bodyPart")} />
            <label htmlFor="wrist">Epilepsy</label>
            <input type="checkbox" id="back" value="back" {...register("bodyPart")} />
            <label htmlFor="back">Diabetes</label>
            <input type="checkbox" id="hip" value="hip" {...register("bodyPart")} />
            <label htmlFor="hip">Stroke</label>
            <input type="checkbox" id="knee" value="knee" {...register("bodyPart")} />
            <label htmlFor="knee">High Cholesterol</label>
            <input type="checkbox" id="ankle" value="ankle" {...register("bodyPart")} />
            <label htmlFor="ankle">Blood Pressure</label>
            <input type="checkbox" id="ankle" value="ankle" {...register("bodyPart")} />
            <label htmlFor="ankle">Cancer</label>
          </div>

          <input type="submit" />

          <div className="sign-in-option">
            <p>Already have an account? <Link to="/Sign-in">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;