import "./DailyChallenge.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";

function DailyChallenge({ component }) {
 const { name } = useParams();

 return (
  <div className="wd-flex-row-container">
   <div className="nav-container">
    <Link id={"challengeLink"} to={`/home/${name}`}>
     <img
      id="backarrow"
      src={require("./assets/Backarrow.png")}
      alt="return home"
     />
    </Link>
   </div>
   <div className="content">
    <Header name={name} />

    {component}
   </div>
  </div>
 );
}
export default DailyChallenge;
