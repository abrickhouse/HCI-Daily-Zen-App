import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SignupFriends() {
 const { name } = useParams();
 return (
  <div className="input-screen p-5 text-center">
   <h1 className="mainheader py-2">Let's Add Some Friends</h1>
   <h6 className="py-2">
    If you know anyone already using DailyZen, add them here to keep up with
    their daily challenges
   </h6>
   <div className="wd-flex-row-container text-center p-4 ">
    <input
     class="form-control form-control-lg m-2 my-3 wide"
     placeholder="Enter username..."
     type="text"
    ></input>{" "}
   </div>
   <Link to={`/home/${name}`}>
    <button class="btn btn-dark btnx-d px-4 m-4 btn-lg">Finish</button>
   </Link>
  </div>
 );
}
export default SignupFriends;
