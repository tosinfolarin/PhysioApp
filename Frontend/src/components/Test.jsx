import { useEffect } from "react";
import {useState} from "react";

const Test = () => {

    const [data, setData] = useState([])


//useEffect hook to fetch the data from the route the data is stored in
    useEffect (()=> {
        fetch('http://localhost:8080/Patients')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    }, [])
    return (
        <div className="Test-Data">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Preferred Name</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>PainScore</th>
                <th>ReadInfo</th>
                <th>PMH</th>
                <th>Notes</th>
                <th>Symptom Area</th>
              </tr>
            </thead>
            
            <tbody>
              {data.map((data, i) => (
                <tr key={i}>
                  <td>{data.PatientID}</td>
                  <td>{data.FirstName}</td>
                  <td>{data.LastName}</td>
                  <td>{data.PreferredName}</td>
                  <td>{data.DOB}</td>
                  <td>{data.Email}</td>
                  <td>{data.PhoneNo}</td>
                  <td>{data.PainScore}</td>
                  <td>{data.ReadInfo}</td>
                  <td>{data.PMH}</td>
                  <td>{data.Notes}</td>
                  <td>{data.SymptomArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
 
export default Test;








// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Test = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/MyProfile")
//       .then((res) => {
//         if (res.data.valid) {
//           setUserDetails(res.data);
//         } else {
//           console.log("User is not signed in");
//           navigate("/Sign-In");
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []); // No dependency array as navigate likely doesn't change frequently

//   // Handle form submission (replace with your desired logic)
//   const dataDictionary = (data) => {
//     const formData = {
//       preferredName: data.preferredName,
//       contactNumber: data.contactNumber,
//       email: data.email,
//       password: data.password,
//       bodyPart: data.bodyPart,
//       painScore: data.painScore,
//       pastMedHistory: data.pastMedHistory,
//     };
//     console.log(formData);
//     setSubmitted(true);


//   return (
//     <div>
//       {dataDictionary && ( // Conditionally render if userDetails exists
//         <div>
//           <div>
//             Preferred Name: {dataDictionary.preferredName} <button>Edit</button>
//             Contact Number: {dataDictionary.contactNumber} <button>Edit</button>
//             Email: {dataDictionary.email} <button>Edit</button>
//             Password: xxx <button>Change Password</button>
//             Symptom Area: {dataDictionary.bodyPart} <button>Edit</button>
//             Pain Score: {dataDictionary.painScore} <button>Enter New Pain Score</button>
//             Past Medical History: {dataDictionary.pastMedHistory} <button>Edit</button>
//           </div>
//           <div>
//             <div className="too-easy-link-container">
//               <Link to="/MyProfile" className="too-easy-link">
//                 Back to my Journal
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;