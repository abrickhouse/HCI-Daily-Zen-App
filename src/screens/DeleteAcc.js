import { Link } from "react-router-dom";
import logo from "../DailyZen-wh.png";

function DeleteAcc() {
 return (
  <div className="del-screen p-5 text-center">
   <Link to={`/home/`}>
    <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
   </Link>
   <h1 className="mainheader py-4">We're sad to see you go!</h1>
   <h5 className="wide">
    You're always welcome to join again... but you can still play games!
   </h5>
   <Link to={`/home`}>
    <button class="btn btn-light btnx px-4 m-3 btn-lg">Go Back Home</button>
   </Link>
  </div>
 );
}
export default DeleteAcc;
