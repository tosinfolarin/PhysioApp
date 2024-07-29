import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Homepage';
import Injuries from './components/InjuriesPage';
import FAQs from './components/FAQPage';
import MyProfile from './components/MyProfilePage';
import SignIn from './components/SigningInPage';
import SignUp from './components/SigningUpPage';
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
import KneeExercises from './components/KneeEx1';
import KneeExercises2 from './components/KneeEx2';
import KneeExercises3 from './components/KneeEx3';
import CalfExercises from './components/CalfEx1';
import CalfExercises2 from './components/CalfEx2';
import CalfExercises3 from './components/CalfEx3';
import AnkleExercises from './components/AnkleEx1';
import AnkleExercises2 from './components/AnkleEx2';
import AnkleExercises3 from './components/AnkleEx3';
import FootExercises from './components/FootEx1';
import FootExercises2 from './components/FootEx2';
import FootExercises3 from './components/FootEx3';
import LowerExercises from './components/LowerEx1';
import LowerExercises2 from './components/LowerEx2';
import LowerExercises3 from './components/LowerEx3';
import UpperExercises from './components/UpperEx1';
import UpperExercises2 from './components/UpperEx2';
import UpperExercises3 from './components/UpperEx3';
import CAD from './components/Cad';
import Myelopathy from './components/Myelopathy';
import CompartmentSyndrome from './components/CompartmentSyndrome';
import CaudaEquina from './components/CaudaEquina';
import Polymyalgia from './components/Polymyalgia';
import Fracture from './components/Fractures';
import Cancer from './components/Cancer';
import DVT from './components/DVT';
import Cellulitis from './components/Cellulitis';
import Rheumatism from './components/Rheumatism';

import Test from './components/Test';
import Sign from './components/Sign';


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
        <Route path="/knee-pain" element={<KneeExercises/>}/>
        <Route path="/knee-pain/level-2" element={<KneeExercises2/>}/>
        <Route path="/knee-pain/level-3" element={<KneeExercises3/>}/>
        <Route path="/calf-pain" element={<CalfExercises/>}/>
        <Route path="/calf-pain/level-2" element={<CalfExercises2/>}/>
        <Route path="/calf-pain/level-3" element={<CalfExercises3/>}/>
        <Route path="/ankle-pain" element={<AnkleExercises/>}/>
        <Route path="/ankle-pain/level-2" element={<AnkleExercises2/>}/>
        <Route path="/ankle-pain/level-3" element={<AnkleExercises3/>}/>
        <Route path="/foot-pain" element={<FootExercises/>}/>
        <Route path="/foot-pain/level-2" element={<FootExercises2/>}/>
        <Route path="/foot-pain/level-3" element={<FootExercises3/>}/>
        <Route path="/lower-limb-paresthesia" element={<LowerExercises/>}/>
        <Route path="/lower-limb-paresthesia/level-2" element={<LowerExercises2/>}/>
        <Route path="/lower-limb-paresthesia/level-3" element={<LowerExercises3/>}/>
        <Route path="/upper-limb-paresthesia" element={<UpperExercises/>}/>
        <Route path="/upper-limb-paresthesia/level-2" element={<UpperExercises2/>}/>
        <Route path="/upper-limb-paresthesia/level-3" element={<UpperExercises3/>}/>
        <Route path="/cad" element={<CAD/>}/>
        <Route path="/myelopathy" element={<Myelopathy/>}/>
        <Route path="/compartment-syndrome" element={<CompartmentSyndrome/>}/>
        <Route path="/ces" element={<CaudaEquina/>}/>
        <Route path="/pmr" element={<Polymyalgia/>}/>
        <Route path="/fractures" element={<Fracture/>}/>
        <Route path="/cancer" element={<Cancer/>}/>
        <Route path="/dvt" element={<DVT/>}/>
        <Route path="/cellulitis" element={<Cellulitis/>}/>
        <Route path="/rheumatoid-arthritis" element={<Rheumatism/>}/>

        <Route path="/Sign" element={<Sign/>}/>
        <Route path="/Test" element={<Test/>}/>


      </Routes>
    </Router>
  );
}


export default App;
