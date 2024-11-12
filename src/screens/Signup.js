import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../DailyZen.png";

function Signup() {
 const [username, setUsername] = useState();
 return (
  <div className="input-screen p-5 text-center">
   <Link to={`/home/`}>
    <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
   </Link>
   <h1 className="mainheader py-2">Welcome!</h1>
   <h6 className="py-2">Let's get some information about you</h6>
   <div className="wd-flex-row-container text-center p-4 input-card">
    <div>
     <input
      class="form-control form-control-lg m-2 my-3 wide"
      placeholder="Name..."
      type="text"
     ></input>{" "}
     <input
      class="form-control form-control-lg m-2 my-3 wide"
      placeholder="Username..."
      type="text"
      onChange={(e) => setUsername(e.target.value)}
     ></input>{" "}
     <input
      class="form-control form-control-lg m-2 my-3 wide"
      placeholder="Email..."
      type="text"
     ></input>{" "}
     <input
      class="form-control form-control-lg m-2 my-3 wide"
      placeholder="Password..."
      type="password"
     ></input>{" "}
     <input
      class="form-control form-control-lg m-2 my-3 wide"
      placeholder="Confirm Password..."
      type="password"
     ></input>{" "}
     {username ? (
      <Link to={`/signup2/${username}`}>
       <button class="btn btn-dark btnx-d px-4 mx-2 btn-lg">Next</button>
      </Link>
     ) : (
      <button class="btn btn-dark btnx-d px-4 mx-2 btn-lg" disabled>
       Next
      </button>
     )}
    </div>
   </div>
  </div>
 );
}
export default Signup;
