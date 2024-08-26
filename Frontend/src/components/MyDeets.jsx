// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";


// const Details = () => {
//     const [userDetails, setUserDetails] = useState(null);
//     const navigate = useNavigate();
    
   
    

//     const submitData = (data) => {
//         const formData = {
//             preferredName: data.preferredName,
//             contactNumber: data.contactNumber,
//             email: data.email,
//             password: data.password,
//             bodyPart: data.bodyPart,
//             painScore: data.painScore,
//             pastMedHistory: data.pastMedHistory,
//         };
//         console.log(formData);
//         setSubmitted(true);
//     };

//     useEffect(()=> {
    
//         axios.get('http://localhost:8080/api/MyProfile')
//         .then(res => { 
//           if(res.data.valid){
//             setAuth(true);
//             setName(res.data.name);
//             setFirstName(res.data.firstName)
//             setLastName(res.data.lastName)
//             setPastMedHistory(res.data.pastMedHistory)
//             setPainScore(res.data.painScore)
//           } else { // This will run if the user is unable to sign in/ or the user logs out
//             setAuth(false); 
//             console.log('User is not signed in');
//             navigate('/Sign-In');
//           }
          
//         })
//         //if there is an error this will log the error to the console
//         .catch(err => console.log(err))
//       },[])

//     return (

//         <div>
//         <div>
//             Preferred Name: {name} <button> Edit </button>
//             Contact Number: {contactNumber} <button> Edit </button>
//             Email: {email} <button> Edit </button>
//             Password: xxx <button> Change Password </button>
//             Symptom Area: {bodyPart} <button> Edit </button>
//             Pain Score: {painScore} <button> Enter New Pain Score </button>
//             Past Medical History: {pastMedHistory} <button> Edit </button>
//         </div>


//         <div>
//             <div className="Sign up">
//                 <form onSubmit={handleSubmit(submitData)} className="SignUp">
//                     <h1>My Details</h1>

//                     <label>Preferred Name:</label>
//                     <input type="text" {...register("preferredName")} />
//                     {errors.preferredName && <span className="errorMessage">{errors.preferredName.message}</span>}

//                     <label>Contact Number:</label>
//                     <input type="text" {...register("contactNumber")} />
//                     {errors.contactNumber && <span className="errorMessage">{errors.contactNumber.message}</span>}

//                     <label>Email:</label>
//                     <input type="email" {...register("email")} />
//                     {errors.email && <span className="errorMessage">{errors.email.message}</span>}

//                     <label>Password:</label>
//                     <input type="password" {...register("password")} />
//                     {errors.password && <span className="errorMessage">{errors.password.message}</span>}

//                     <label>Symptoms Area:</label>
//                     <div>
//                         <input type="checkbox" id="neck" value="neck" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("neck")} />
//                         <label htmlFor="neck">Neck</label>
//                         <input type="checkbox" id="shoulder" value="shoulder" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("shoulder")} />
//                         <label htmlFor="shoulder">Shoulder</label>
//                         <input type="checkbox" id="elbow" value="elbow" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("elbow")} />
//                         <label htmlFor="elbow">Elbow</label>
//                         <input type="checkbox" id="wrist" value="wrist" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("wrist")} />
//                         <label htmlFor="wrist">Wrist/Hand</label>
//                         <input type="checkbox" id="back" value="back" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("back")} />
//                         <label htmlFor="back">Back</label>
//                         <input type="checkbox" id="hip" value="hip" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("hip")} />
//                         <label htmlFor="hip">Hip</label>
//                         <input type="checkbox" id="knee" value="knee" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("knee")} />
//                         <label htmlFor="knee">Knee</label>
//                         <input type="checkbox" id="ankle" value="ankle" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("ankle")} />
//                         <label htmlFor="ankle">Ankle/Foot</label><br/>
//                         <input type="checkbox" id="lowerlimb" value="lower limb paresthesia" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("lower limb paresthesia")} />
//                         <label htmlFor="lowerlimb">Upper Limb Pins and Needles/Numbness</label> <br/>
//                         <input type="checkbox" id="upperlimb" value="upper limb paresthesia" {...register("bodyPart")} defaultChecked={userDetails?.bodyPart?.includes("upper limb paresthesia")} />
//                         <label htmlFor="upperlimb">Lower Limb Pins and Needles/Numbness</label>
//                     </div>

//                     <label>On a scale of 0-10, with 10 being the worst, how would you rate the severity of your symptoms?</label>
//                     <select {...register("painScale")}>
//                         <option value=""></option>
//                         <option value="0">0</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                     </select>

//                     <label>Please select any conditions you have a history of:</label>
//                     <div>
//                         <input type="checkbox" id="thyroid" value="thyroid" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("thyroid")} />
//                         <label htmlFor="thyroid">Thyroid</label>
//                         <input type="checkbox" id="heart" value="heart" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("heart")} />
//                         <label htmlFor="heart">Heart</label>
//                         <input type="checkbox" id="rheumatism" value="rheumatism" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("rheumatism")} />
//                         <label htmlFor="rheumatism">Rheumatism</label>
//                         <input type="checkbox" id="epilepsy" value="epilepsy" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("epilepsy")} />
//                         <label htmlFor="epilepsy">Epilepsy</label>
//                         <input type="checkbox" id="diabetes" value="diabetes" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("diabetes")} />
//                         <label htmlFor="diabetes">Diabetes</label>
//                         <input type="checkbox" id="stroke" value="stroke" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("stroke")} />
//                         <label htmlFor="stroke">Stroke</label>
//                         <input type="checkbox" id="high-cholesterol" value="high-cholesterol" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("high-cholesterol")} />
//                         <label htmlFor="high-cholesterol">High Cholesterol</label>
//                         <input type="checkbox" id="blood-pressure" value="blood-pressure" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("blood-pressure")} />
//                         <label htmlFor="blood-pressure">Blood Pressure</label>
//                         <input type="checkbox" id="cancer" value="cancer" {...register("pastMedHistory")} defaultChecked={userDetails?.pastMedHistory?.includes("cancer")} />
//                         <label htmlFor="cancer">Cancer</label>
//                     </div>
    
//                     <input type="submit" />
//                 </form>
//             </div>
//             <div>
//                 <div className="too-easy-link-container">
//                     <Link to="/MyProfile" className="too-easy-link">Back to my Journal</Link>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Details;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";


// const Details = () => {
//     const [userDetails, setUserDetails] = useState(null);
//     const navigate = useNavigate();
    

//     const submitData = (data) => {
//         const formData = {
//             preferredName: data.preferredName,
//             contactNumber: data.contactNumber,
//             email: data.email,
//             password: data.password,
//             bodyPart: data.bodyPart,
//             painScore: data.painScore,
//             pastMedHistory: data.pastMedHistory,
//         };
//         console.log(formData);
//         setSubmitted(true);
//     };

//     useEffect(()=> {
    
//         axios.get('http://localhost:8080/api/MyProfile')
//         .then(res => { 
//           if(res.data.valid){
//             setAuth(true);
//             setName(res.data.name);
//             setFirstName(res.data.firstName)
//             setLastName(res.data.lastName)
//             setPastMedHistory(res.data.pastMedHistory)
//             setPainScore(res.data.painScore)
//           } else { // This will run if the user is unable to sign in/ or the user logs out
//             setAuth(false); 
//             console.log('User is not signed in');
//             navigate('/Sign-In');
//           }
          
//         })
//         //if there is an error this will log the error to the console
//         .catch(err => console.log(err))
//       },[])

//     return (

//         <div>
//         <div>
//             Preferred Name: {name} <button> Edit </button>
//             Contact Number: {contactNumber} <button> Edit </button>
//             Email: {email} <button> Edit </button>
//             Password: xxx <button> Change Password </button>
//             Symptom Area: {bodyPart} <button> Edit </button>
//             Pain Score: {painScore} <button> Enter New Pain Score </button>
//             Past Medical History: {pastMedHistory} <button> Edit </button>
//         </div>


 
//             <div>
//                 <div className="too-easy-link-container">
//                     <Link to="/MyProfile" className="too-easy-link">Back to my Journal</Link>
//                 </div>
//             </div>
//         </div>
        
//     );
// };

// export default Details;