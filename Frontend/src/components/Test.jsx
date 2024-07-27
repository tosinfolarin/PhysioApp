import { useEffect } from "react";

const Test = () => {
//useEffect hook to fetch the data from the route the data is stored in
    useEffect (()=> {
        fetch('http://localhost:8080/Patients')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

    }, [])
    return (
        <div>
            <h1> Patients contents </h1>
        </div>
      );
}
 
export default Test;