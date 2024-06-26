import { NavLink } from "react-router-dom";

const MyInjury = () => {
  return (
    <div className="container">
      <NavLink to="/Injuries" className="navLink">
        <button className="button">
          <h3 className="myInjury"> My Symptoms</h3>
        </button>
      </NavLink>
    </div>
  );
};

export default MyInjury;
