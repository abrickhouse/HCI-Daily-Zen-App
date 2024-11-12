import { Link } from "react-router-dom";
import Nav from "../../Nav";
import { useState } from "react";
import logo from "../../DailyZen.png";
import { useParams } from "react-router-dom";

function SetNotif() {
 const { name } = useParams();
 return (
  <div className="input-screen p-5 text-center">
   <Link to={`/home/${name}`}>
    <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
   </Link>
   <h1 className="mainheader py-4">Notification Settings</h1>
   <div className="wd-flex-row-container text-center px-4 py-3 input-card row">
    <div class="form-check form-switch form-control-lg">
     <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
     />
     <label class="form-check-label" for="flexSwitchCheckDefault">
      Receive daily notifications to complete challenges
     </label>
    </div>
    <div class="form-check form-switch form-control-lg">
     <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
     />
     <label class="form-check-label" for="flexSwitchCheckChecked">
      Receive notifications about friends
     </label>
    </div>
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
export default SetNotif;
