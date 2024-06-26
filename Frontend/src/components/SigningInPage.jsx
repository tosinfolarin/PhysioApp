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
      email: data.email,
      age: data.age,
      contactNumber: data.contactNumber,
      bodyPart: data.bodyPart,
      painScale: data.painScale,
      lessonType: data.lessonType,
      lessonPackage: data.lessonPackage,
    };
    console.log(formData);
    setSubmitted(true);
    navigate("/exercises"); // Navigate to exercises page
  };

  if (submitted) {
    return (
      <div className="thank-you-message">
        <h2>Redirect Pt to the exercises page.</h2>
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
          <h1>Sign In</h1>
          <h3>Please sign up if you do not already have an account.</h3>
          
          <label>Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && <span className="errorMessage">{errors.email.message}</span>}

          <label>Password:</label>
          <input type="email" {...register("email")} />
          {errors.email && <span className="errorMessage">{errors.email.message}</span>}

     
  
          <input type="submit" />

          <div className="sign-up-option">
            <p> Want to create an account? <Link to="/Sign-Up">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;