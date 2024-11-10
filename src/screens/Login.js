import { Link } from "react-router-dom";
import Nav from "../Nav";
import { useState } from "react";

function LogIn() {
 const [username, setUsername] = useState();
 return (
  <div className="input-screen p-5 text-center">
   <h1 className="mainheader py-4">Welcome Back!</h1>
   <div className="wd-flex-row-container text-center p-4 input-card row">
    <input
     class="form-control form-control-lg mx-2 wide"
     placeholder="Username..."
     type="text"
     onChange={(e) => setUsername(e.target.value)}
    ></input>
    <input
     class="form-control form-control-lg m-2 my-3 wide"
     placeholder="Password..."
     type="password"
    ></input>
    {username ? (
     <Link to={`/home/${username}`}>
      <button class="btn btn-dark btnx-d px-4 mx-2 btn-lg">Login</button>
     </Link>
    ) : (
     <button class="btn btn-dark btnx-d px-4 mx-2 btn-lg" disabled>
      Login
     </button>
    )}
   </div>
  </div>
 );
}
export default LogIn;
