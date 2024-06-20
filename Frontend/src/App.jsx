import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Homepage';
import Injuries from './components/InjuriesPage';
import FAQs from './components/FAQPage';
import MyProfile from './components/MyProfilePage';
import SigningIn from './components/SigningInPage';
import SignUp from './components/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/injuries" element={<Injuries/>} />
        <Route path="/FAQs" element={<FAQs/>} />
        <Route path="/MyProfile" element={<MyProfile/>} />
        <Route path="/Sign-In" element={<SigningIn/>} />
        <Route path="/Sign-Up" element={<SignUp/>} />
        
      </Routes>
    </Router>
  );
}


export default App;
