import PhysioConsultationImg from "../images/PhysioConsultationImg.png"; 

const RedflagWarning = () => {
  return (
    <div className="red-flag-page">
        
      <div className="red-flag-intro">
        <h1>Red flags are critical warning signs that indicate serious underlying health conditions. 
          It is vital you read the information below before continuing with the exercises.</h1>
      </div>

      <div className="flex-c redflags" role="region" aria-label="About Me">
        <img src={PhysioConsultationImg} alt="Image of physiotherapy consultation" className="ConsultationPic"/>
      </div>

    </div>
  );
};

export default RedflagWarning;