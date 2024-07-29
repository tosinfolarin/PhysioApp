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