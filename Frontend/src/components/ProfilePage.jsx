import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Textbox from './Textbox';

const apiUrl = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

const Profile = () => {
  const [diaryEntry, setDiaryEntry] = useState(''); // This holds the diary entry

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value); // Update state with diary entry
  };

  const handleDiarySubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Diary entry submitted:', diaryEntry);
    
  };

  const handleButtonClick = () => {
    navigate('/MyDetails');
  };

  const [auth, setAuth] = useState('') // This checks whether the user is logged in or not, if the user clicks logout it is activated
  


  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [pastMedHistory, setPastMedHistory] = useState('')
  const [painScore, setPainScore] = useState('')

  const navigate = useNavigate()
  useEffect(()=> {
    
    axios.get(`${apiUrl}/api/MyProfile`) 
    .then(res => { 
      if(res.data.valid){
        setAuth(true);
        setName(res.data.name);
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setPastMedHistory(res.data.pastMedHistory)
        setPainScore(res.data.painScore)
      } else { // This will run if the user is unable to sign in/ or the user logs out
        setAuth(false); 
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
          <h1> {name}'s Journal</h1>
        </div>
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-image">
              <img src="https://picsum.photos/200/200" alt="placeholder" />
            </div>
            <div className="profile-username">
              <span> {firstName} {lastName}</span>
            </div>

            
            <button onClick={handleButtonClick} className="myDetailsButton"> View My Details</button>
            
            
            <div className="profile-pmh">
            <span> Past Medical History: <br></br>{pastMedHistory} </span> <br></br><br></br>
            <span> Starting Pain Score: {painScore}</span>
            </div>
          </div>
          
          <div className='user-diary'>
            <Textbox/>
          </div>

        </div>
      </div>
      
    );
  }
  
  export default Profile;