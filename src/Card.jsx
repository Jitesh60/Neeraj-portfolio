import react from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <Link to="/HomePage">
         <div className="border hover:bg-red-300 flex flex-col items-center p-5 mr-9 rounded">
            {props.children}
         </div>
        </Link>
    );

}
export default Card;