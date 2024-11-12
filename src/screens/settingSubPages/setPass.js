import { Link } from "react-router-dom";
import Nav from "../../Nav";
import { useState } from "react";
import logo from "../../DailyZen.png";
import { useParams } from "react-router-dom";

function SetPass() {
 const { name } = useParams();
 return (
  <div className="input-screen p-5 text-center">
   <Link to={`/home/${name}`}>
    <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
   </Link>
   <h1 className="mainheader py-4">Change Password</h1>
   <div className="wd-flex-row-container text-center p-4 input-card row">
    <input
     class="form-control form-control-lg m-2 wide"
     placeholder="Current password"
     type="password"
    ></input>
    <input
     class="form-control form-control-lg m-2  wide"
     placeholder="New password"
     type="password"
    ></input>
    <input
     class="form-control form-control-lg m-2 wide"
     placeholder="Confirm new password"
     type="password"
    ></input>
    <div>
     <Link to={`/settings/${name}`}>
      <button class="btn btn-light btnx px-4 m-2 btn-lg">Cancel</button>
     </Link>
     <Link to={`/settings/${name}`}>
      <button class="btn btn-dark btnx-d px-4 m-2 btn-lg">Save</button>
     </Link>
    </div>
   </div>
  </div>
 );
}
export default SetPass;
