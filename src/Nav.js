import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa7 } from "@fortawesome/free-solid-svg-icons";
import prof from "./ab-prof.jpeg";

function Nav(props) {
 const [name, setName] = useState(props.name);
 const [isFreezeModalOpen, setIsFreezeModalOpen] = useState(false);
 const { pathname } = useLocation();
 return (
  <nav className="nav list-group text-center sidebar d-flex">
   {name ? (
    <Link
     className={`nav-link px-3  ${
      pathname.includes("profile") && "active  bg-whitex"
     }`}
     to={`/profile/${name}`}
    >
     <img src={prof} className="profpic" alt="profile" />
     <h3 className="py-1">Hi {name}!</h3>{" "}
    </Link>
   ) : (
    <Link className="nav-link black- px-3  " to="/login">
     <FontAwesomeIcon icon={faUserSecret} size="9x" />
     <h3>Log In</h3>
    </Link>
   )}
   {name && (
    <div className="d-flex justify-content-center py-0  my-3">
     {" "}
     <button
      className="nav-link nav-btn py-0 px-2"
      onClick={() => setIsFreezeModalOpen(true)}
     >
      <FontAwesomeIcon icon={fa1} size="3x" />
      <FontAwesomeIcon icon={faSnowflake} size="3x" />
      <br />
      <h6>Freeze</h6>
     </button>
     <button className="nav-link nav-btn py-0 px-2" disabled>
      <FontAwesomeIcon icon={fa7} size="3x" />
      <FontAwesomeIcon icon={faFire} size="3x" /> <br />
      <h6>Streak</h6>
     </button>
    </div>
   )}

   {name ? (
    <Link
     className={`nav-link px-3 ${
      pathname.includes("home") && "active bg-whitex"
     }`}
     to={`/home/${name}`}
    >
     <h3 className="">Home</h3>
    </Link>
   ) : (
    <Link
     className={`nav-link px-3   ${
      pathname.includes("home") && "active  bg-whitex"
     }`}
     to={`/home/`}
    >
     <h3>Home</h3>
    </Link>
   )}
   {name ? (
    <Link
     className={`nav-link px-3    ${
      pathname.includes("community") && "active  bg-whitex"
     }`}
     to={`/community/${name}`}
    >
     <h3>Community</h3>
    </Link>
   ) : (
    <Link
     className={`nav-link px-3   ${
      pathname.includes("community") && "active  bg-whitex"
     }`}
     to="/community"
    >
     <h3>Community</h3>
    </Link>
   )}
   {name ? (
    <Link
     className={`nav-link px-3   ${
      pathname.includes("settings") && "active bg-whitex"
     }`}
     to={`/settings/${name}`}
    >
     <h3>Settings</h3>
    </Link>
   ) : (
    <Link
     className={`nav-link px-3   ${
      pathname.includes("settings") && "active  bg-whitex"
     }`}
     to="/settings"
    >
     <h3>Settings</h3>
    </Link>
   )}
   {isFreezeModalOpen && (
    <div className="modal-overlay" onClick={() => setIsFreezeModalOpen(false)}>
     <div class="card modal-card modal-content p-4">
      <FontAwesomeIcon icon={faSnowflake} size="5x" />
      <div>
       <h5 class="modal-title mx-2">Streak Freezes</h5>
       <div class="freeze modal-body mx-2">
        Freezes available: 1<br />
        You can maintain your streak without doing the challenge by using a
        streak freeze. You gain an additional freeze each day you use the app
       </div>
      </div>

      <div class="modal-footer d-flex justify-content-center">
       <button
        type="button"
        class="btn btn-secondary m-2 my-3 btnx"
        data-dismiss="modal"
        onClick={() => setIsFreezeModalOpen(false)}
       >
        Cancel
       </button>
       <button
        type="button"
        class="btn btn-primary m-2 btnx-d "
        onClick={() => setIsFreezeModalOpen(false)}
       >
        Freeze Streak
       </button>
      </div>
     </div>
    </div>
   )}
  </nav>
 );
}

export default Nav;
