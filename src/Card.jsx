import react from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to="/HomePage">
      <div className="flex flex-col items-center p-5 mb-3 bg-white border rounded hover:bg-gray-300 hover:animate-pulse md:mr-9 ">
        {props.children}
      </div>
    </Link>
  );
}
export default Card;
