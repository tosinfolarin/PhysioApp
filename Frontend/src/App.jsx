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
import ShoulderExercises from './components/ShoulderEx1';
import ShoulderExercises2 from './components/ShoulderEx2';
import ShoulderExercises3 from './components/ShoulderEx3';
import UpperBackExercises from './components/UpperBackEx1';
import UpperBackExercises2 from './components/UpperBackEx2';
import UpperBackExercises3 from './components/UpperBackEx3';
import LowerBackExercises from './components/LowerBackEx1';
import LowerBackExercises2 from './components/LowerBackEx2';
import LowerBackExercises3 from './components/LowerBackEx3';
import HipExercises from './components/HipEx1';
import HipExercises2 from './components/HipEx2';
import HipExercises3 from './components/HipEx3';
import ThighExercises from './components/ThighEx1';
import ThighExercises2 from './components/ThighEx2';
import ThighExercises3 from './components/ThighEx3';



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
        <Route path="/shoulder-pain" element={<ShoulderExercises/>}/>
        <Route path="/shoulder-pain/level-2" element={<ShoulderExercises2/>}/>
        <Route path="/shoulder-pain/level-3" element={<ShoulderExercises3/>}/>
        <Route path="/upper-back-pain" element={<UpperBackExercises/>}/>
        <Route path="/upper-back-pain/level-2" element={<UpperBackExercises2/>}/>
        <Route path="/upper-back-pain/level-3" element={<UpperBackExercises3/>}/>
        <Route path="/lower-back-pain" element={<LowerBackExercises/>}/>
        <Route path="/lower-back-pain/level-2" element={<LowerBackExercises2/>}/>
        <Route path="/lower-back-pain/level-3" element={<LowerBackExercises3/>}/>
        <Route path="/hip-pain" element={<HipExercises/>}/>
        <Route path="/hip-pain/level-2" element={<HipExercises2/>}/>
        <Route path="/hip-pain/level-3" element={<HipExercises3/>}/>
        <Route path="/thigh-pain" element={<ThighExercises/>}/>
        <Route path="/thigh-pain/level-2" element={<ThighExercises2/>}/>
        <Route path="/thigh-pain/level-3" element={<ThighExercises3/>}/>
        
        
      </Routes>
    </Router>
  );
}


export default App;
