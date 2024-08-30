import MyInjury from "./myInjuryButton";
import RedflagWarning from "./RedflagWarning";
import RedFlagInformation from "./RedFlagInformation";
import RedFlags from "./RedFlagsButton";
import ScrollAreaHorizontal from "./Scrollbar";
import FAQinfo from "./FAQInfo";



const Home = () => {
  
    return ( 
        <div>
        <MyInjury/>
        <RedflagWarning/>
        <RedFlagInformation/>
        <RedFlags/>

        <h1 className="redflag-prompt">Scroll For Red Flag Information</h1>
      <ScrollAreaHorizontal />
       
    

        <FAQinfo/>
        </div>
        
     );
}
 
export default Home;