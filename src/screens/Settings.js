import React, { useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";

function Settings() {
 const { name } = useParams();
 const [isModalOpen, setIsModalOpen] = useState(false);
 return (
  <div className="wd-flex-row-container">
   <div className="nav-container">
    <Nav name={name} />
   </div>
   <div className="content">
    <Header name={name} />
    <div className="mx-2 px-3 wide">
     <h2 className="mainheader">Settings</h2>
     {name ? (
      <div class="">
       <ul class="list-group list-group-flush py-4 wide">
        <Link className="remove-link-style" to={`/change-email/${name}`}>
         <li class="list-group-item py-3 d-flex justify-content-between">
          <h4>Change email</h4>
          <FontAwesomeIcon
           icon={faChevronRight}
           className="float-end mx-5"
           size="1x"
          />
         </li>
        </Link>
        <Link className="remove-link-style" to={`/change-password/${name}`}>
         <li class="list-group-item py-3 d-flex justify-content-between">
          <h4>Change password</h4>
          <FontAwesomeIcon
           icon={faChevronRight}
           className="float-end mx-5"
           size="1x"
          />
         </li>
        </Link>
        <Link className="remove-link-style" to={`/notifications/${name}`}>
         <li class="list-group-item py-3 d-flex justify-content-between">
          <h4>Notifications</h4>
          <FontAwesomeIcon
           icon={faChevronRight}
           className="float-end mx-5"
           size="1x"
          />
         </li>
        </Link>
        <Link className="remove-link-style" to={`/manage-friends/${name}`}>
         <li class="list-group-item py-3 d-flex justify-content-between">
          <h4>Manage friends</h4>
          <FontAwesomeIcon
           icon={faChevronRight}
           className="float-end mx-5"
           size="1x"
          />
         </li>
        </Link>
       </ul>
       <Link to={`/settings`}>
        <button class="btn btn-light px-4 m-2 btnx">Log out</button>
       </Link>
       <br />
       <button
        class="btn btn-light px-4 m-2 btnx"
        onClick={() => setIsModalOpen(true)}
       >
        Delete account
       </button>
       {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
         <div class="card modal-card modal-content p-4">
          <div>
           <h5 class="modal-title mx-2">Are you sure?</h5>
          </div>
          <div class="modal-body mx-2">This is a permenant action.</div>
          <div class="modal-footer">
           <button
            type="button"
            class="btn btn-secondary m-2 my-3 btnx"
            data-dismiss="modal"
            onClick={() => setIsModalOpen(false)}
           >
            Cancel
           </button>
           <Link to={`/deleted`}>
            <button
             type="button"
             class="btn btn-primary m-2 btnx-d delete-btn"
             onClick={() => setIsModalOpen(false)}
            >
             Delete Account
            </button>
           </Link>
          </div>
         </div>
        </div>
       )}
      </div>
     ) : (
      <div>
       <br />
       <Link to={`/login`}>
        <button class="btn btn-light px-4 m-2 btnx">Login</button>
       </Link>
       <br />{" "}
       <Link to={`/signup`}>
        <button class="btn btn-light px-4 m-2 btnx">Sign up</button>
       </Link>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}
export default Settings;
