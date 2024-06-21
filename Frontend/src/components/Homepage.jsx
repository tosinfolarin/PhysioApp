import Navbar from "./Navbar";
import MyInjury from "./myInjuryButton";
import RedflagWarning from "./RedflagWarning";
import RedFlagInfo from "./RedFlagInfo";
import RedFlags from "./RedFlagsButton";
import ScrollAreaHorizontalDemo from "./Scrollbar";
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
      <ScrollAreaHorizontalDemo />
       
    

        <FAQinfo/>
        </div>
        
     );
}
 
export default Home;