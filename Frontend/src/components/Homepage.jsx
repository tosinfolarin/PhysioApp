import MyInjury from "./myInjuryButton";
import RedflagWarning from "./RedflagWarning";
import RedFlagInfo from "./RedFlagInfo";
import RedFlags from "./RedFlagsButton";
import ScrollAreaHorizontal from "./Scrollbar";
import FAQinfo from "./FAQInfo";



const Home = () => {
  
    return ( 
        <div>
        <MyInjury/>
        <RedflagWarning/>
        <RedFlagInfo/>
        <RedFlags/>

        <h1 className="redflag-prompt">Scroll For Red Flag Information</h1>
      <ScrollAreaHorizontal />
       
    

        <FAQinfo/>
        </div>
        
     );
}
 
export default Home;