import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [diaryEntry, setDiaryEntry] = useState(''); // This holds the diary entry

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value); // Update state with diary entry
  };

  const handleDiarySubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Diary entry submitted:', diaryEntry);
    
  };



  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [pastMedHistory, setPastMedHistory] = useState('')

  const navigate = useNavigate()
  useEffect(()=> {
    axios.defaults.withCredentials = true; // 
    axios.get('http://localhost:8080/api/MyProfile')
    .then(res => { 
      if(res.data.valid){
        setName(res.data.name);
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setPastMedHistory(res.data.pastMedHistory)
      } else { // This will run if the user is unable to sign in 
        console.log('User is not signed in');
        navigate('/Sign-In');
      }
      
    })
    //if there is an error this will log the error to the console
    .catch(err => console.log(err))
  },[])


    return (
      <div className="profile-page">
        <div className="profile-header">
          <h1> {name}'s Profile</h1>
        </div>
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-image">
              <img src="https://picsum.photos/200/200" alt="placeholder" />
            </div>
            <div className="profile-username">
              <span> {firstName} {lastName}</span>
            </div>
            <div className="profile-other-info">
            <span> Past Medical History: <br></br>{pastMedHistory} </span>
            </div>
          </div>
          <div className="profile-main-content">
          <div className="user-diary">
            
            <form onSubmit={handleDiarySubmit}>
              <textarea
                value={diaryEntry} // Bind textarea value to state
                onChange={handleDiaryChange} // Update state on change
                placeholder="Document your progress here..."
                rows="20"
                cols="150"
              />
              <button type="submit">Submit Diary Entry</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;