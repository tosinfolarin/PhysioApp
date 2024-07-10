import { Link } from "react-router-dom";

const RedFlags = () => {
    return (
      <div className="container">
        <Link to="/cad">
        <button className="button"> 
          <h3 className="RedFlags"> Red Flags </h3>
        </button>
        </Link>
      </div>
      
    );
  };
  
  export default RedFlags;
  