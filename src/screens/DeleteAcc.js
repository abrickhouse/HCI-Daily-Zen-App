import { Link } from "react-router-dom";

function DeleteAcc() {
 return (
  <div className="del-screen p-5 text-center">
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
