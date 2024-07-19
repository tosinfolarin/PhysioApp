import Navbar from "./Navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const schema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
  });
  

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    console.log(formData);
    setSubmitted(true);
    navigate("/MyProfile"); // Navigate to exercises page
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
          <input type="password" {...register("password")} />
          {errors.password && <span className="errorMessage">{errors.password.message}</span>}

     
  
          <input type="submit" />

          <div className="sign-up-option">
            {/* <p> Want to create an account? <Link to="/Sign-Up">Sign Up</Link></p> */}
            <p> Want to create an account? <Link to="/Sign-Up">Sign Up</Link></p>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;