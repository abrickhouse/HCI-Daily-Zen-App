import { Link } from "react-router-dom";
import Nav from "../Nav";
import { useState } from "react";

function LogIn() {
 const [username, setUsername] = useState();
 return (
  <div className="wd-flex-row-container text-center mx-5">
   {" "}
   <div>
    <h2>Log In</h2>
    Welcome
    <br />
    enter username
    <input
     class="form-control my-2"
     placeholder="Enter username..."
     type="text"
     onChange={(e) => setUsername(e.target.value)}
    ></input>{" "}
    <br />
    enter password
    <br />
    enter email
    <br />
    ...[next]
    <br />
    upon completion should lead back to home page (pass in name/username)
    <br />
    <Link to={`/home/${username}`}>
     <button class="btnx my-4 px-2 mx-2">Enter</button>
    </Link>
   </div>
  </div>
 );
}
export default LogIn;
