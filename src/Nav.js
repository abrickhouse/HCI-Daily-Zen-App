import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
 const [name, setName] = useState(props.name);
 const { pathname } = useLocation();
 return (
  <nav className="nav list-group text-center sidebar py-4">
   {name ? (
    <Link
     className={`nav-link px-3 my-4 ${
      pathname.includes("profile") && "active bg-white"
     }`}
     to={`/profile/${name}`}
    >
     <FontAwesomeIcon icon={faUser} size="9x" />
     <h3>Hi {name}!</h3>{" "}
    </Link>
   ) : (
    <Link className="nav-link black-  px-3 my-4" to="/login">
     <FontAwesomeIcon icon={faUserSecret} fade size="9x" />
     <h3>Log In</h3>
    </Link>
   )}
   {name ? (
    <Link
     className={`nav-link px-3 my-4 ${
      pathname.includes("home") && "active bg-white"
     }`}
     to={`/home/${name}`}
    >
     <h3>Home</h3>
    </Link>
   ) : (
    <Link
     className={`nav-link px-3 my-4 ${
      pathname.includes("home") && "active bg-white"
     }`}
     to={`/home/`}
    >
     <h3>Home</h3>
    </Link>
   )}
   {name ? (
    <Link
     className={`nav-link px-3  my-4 ${
      pathname.includes("community") && "active bg-white"
     }`}
     to={`/community/${name}`}
    >
     <h3>Community</h3>
    </Link>
   ) : (
    <Link
     className={`nav-link px-3 my-4 ${
      pathname.includes("community") && "active bg-white"
     }`}
     to="/community"
    >
     <h3>Community</h3>
    </Link>
   )}
   {name ? (
    <Link
     className={`nav-link px-3 my-4 ${
      pathname.includes("settings") && "active bg-white"
     }`}
     to={`/settings/${name}`}
    >
     <h3>Settings</h3>
    </Link>
   ) : (
    <Link
     className={`nav-link px-3 my-4 ${
      pathname.includes("settings") && "active bg-white"
     }`}
     to="/settings"
    >
     <h3>Settings</h3>
    </Link>
   )}
  </nav>
 );
}

export default Nav;
