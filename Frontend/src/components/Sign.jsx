import Navbar from "./Navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios"

const Sign = () => {
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    Name: z.string().min(2, { message: "First name must be at least 2 characters long" }).max(30),
    Password: z.string().min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password must be at most 100 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" }),
  });
  

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    const formData = {
      Name: data.firstName,
      Password: data.password,
      
    };
    console.log(formData);
    setSubmitted(true);
    // navigate("/Sign-in"); // Navigate to sign in page

    
    if(errors.firstName === "" && errors.password === "") {
        axios.post('http://localhost:8080/Sign', (values))
        .then (res => console.log(res))
        .catch(err=> console.log(err));
      }

   

  };
  


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



          <label>Password:</label>
          <input type="password" {...register("password")} />
          {errors.password && <span className="errorMessage">{errors.password.message}</span>}

        
  
          <input type="submit" />
          
          
          

          <div className="sign-in-option">
            <p>Already have an account? <Link to="/Sign-In">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
