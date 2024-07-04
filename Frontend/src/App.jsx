import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Homepage';
import Injuries from './components/InjuriesPage';
import FAQs from './components/FAQPage';
import MyProfile from './components/MyProfilePage';
import SignIn from './components/SigningInPage';
import SignUp from './components/SignUpPage';
import NeckExercises from './components/NeckEx1';
import NeckExercises2 from './components/NeckEx2';
import NeckExercises3 from './components/NeckEx3';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/injuries" element={<Injuries/>} />
        <Route path="/FAQs" element={<FAQs/>} />
        <Route path="/MyProfile" element={<MyProfile/>} />
        <Route path="/Sign-In" element={<SignIn/>} />
        <Route path="/Sign-Up" element={<SignUp/>} />
        <Route path="/neck-pain" element={<NeckExercises/>}/>
        <Route path="/neck-pain/level-2" element={<NeckExercises2/>}/>
        <Route path="/neck-pain/level-3" element={<NeckExercises3/>}/>
        
      </Routes>
    </Router>
  );
}


export default App;
