import PhysioConsultationImg from "../images/PhysioConsultationImg.png"; // Adjust based on your actual file structure

const RedflagInfo = () => {
  return (
    <div className="aboutme-page">
        
      <div className="pic-box">
        <h1>Before You Continue, Please Read, It is Vital!</h1>
      </div>

      <div className="flex-c aboutme" role="region" aria-label="About Me">
        <img src={PhysioConsultationImg} alt="Image of physiotherapy consultation" className="ConsultationPic"/>
        <p>this is red flag info</p>
      </div>

    </div>
  );
};

export default RedflagInfo;