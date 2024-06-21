import Navbar from "./Navbar";
import MyInjury from "./myInjuryButton";
import RedflagInfo from "./RedflagInfo";
import RedFlags from "./RedFlagsButton";
import ScrollAreaHorizontalDemo from "./scrollbar";



const Home = () => {
    return ( 
        <div>
        <Navbar/>
        <MyInjury/>
        <RedflagInfo/>
        <RedFlags/>

        <h1>Scroll For Red Flag Information</h1>
      <ScrollAreaHorizontalDemo />
       
    
       


        






        <h1> FAQs </h1>  
        </div>
        
     );
}
 
export default Home;