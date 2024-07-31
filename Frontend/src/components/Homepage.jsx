import Navbar from "./Navbar";
import MyInjury from "./myInjuryButton";
import RedflagWarning from "./RedflagWarning";
import RedFlagInfo from "./RedFlagInfo";
import RedFlags from "./RedFlagsButton";
import ScrollAreaHorizontal from "./Scrollbar";
import FAQinfo from "./FAQInfo";



const Home = () => {
  
    return ( 
        <div>
        <Navbar/>
        <MyInjury/>
        <RedflagWarning/>
        <RedFlagInfo/>
        <RedFlags/>

        <h1>Scroll For Red Flag Information</h1>
      <ScrollAreaHorizontal />
       
    

        <FAQinfo/>
        </div>
        
     );
}
 
export default Home;