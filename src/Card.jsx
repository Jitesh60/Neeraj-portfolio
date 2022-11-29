import react from "react";
import { Link } from "react-router-dom";

function Card({ className, children }) {
  return (
    <Link to="/HomePage">
      <div
        className={
          "flex flex-col items-center px-5 py-4 mb-3 bg-white border rounded hover:bg-gray-300 hover:animate-pulse md:mr-9  " +
          { className }
        }
      >
        {children}
      </div>
    </Link>
  );
}
export default Card;
