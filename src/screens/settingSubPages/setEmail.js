import { Link } from "react-router-dom";
import Nav from "../../Nav";
import { useState } from "react";
import logo from "../../DailyZen.png";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function SetEmail() {
 const { name } = useParams();
 return (
  <div className="input-screen p-5 text-center">
   <Link to={`/home/${name}`}>
    <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
   </Link>
   <h1 className="mainheader py-4 text">Change Email</h1>
   <div className="wd-flex-row-container text-center p-4 input-card row">
    <input
     class="form-control form-control-lg m-2 wide"
     placeholder="Current email"
     type="text"
    ></input>
    <input
     class="form-control form-control-lg m-2  wide"
     placeholder="New email"
     type="text"
    ></input>
    <input
     class="form-control form-control-lg m-2  wide"
     placeholder="Confirm new email"
     type="text"
    ></input>
    <input
     class="form-control form-control-lg m-2 wide"
     placeholder="Password"
     type="password"
    ></input>
    <div>
     <Link to={`/settings/${name}`}>
      <button class="btn btn-light btnx px-4 m-2 btn-lg">Cancel</button>
     </Link>
     <Link to={`/settings/${name}`}>
      <button class="btn btn-dark btnx-d px-4 m-2 btn-lg save">Save</button>
     </Link>
    </div>
   </div>
  </div>
 );
}
export default SetEmail;
