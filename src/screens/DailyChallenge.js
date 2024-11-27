import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function DailyChallenge({ component }) {
 const { name } = useParams();
 const navigate = useNavigate();

 const [showFinishButton, setShowFinishButton] = useState(false);
 const [hasInteracted, setHasInteracted] = useState(false);
 const [showModal, setShowModal] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => {
   setShowFinishButton(true);
  }, 60000);

  return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  const handleInteraction = () => {
   if (!hasInteracted) {
    setHasInteracted(true);
    setShowFinishButton(true);
   }
  };

  window.addEventListener("mousemove", handleInteraction);
  window.addEventListener("click", handleInteraction);

  return () => {
   window.removeEventListener("mousemove", handleInteraction);
   window.removeEventListener("click", handleInteraction);
  };
 }, [hasInteracted]);

 const handleFinishClick = () => {
  setShowModal(true);
 };

 const handleCloseModal = () => {
  setShowModal(false);
 };

 const handleNope = () => {
  handleCloseModal();
  navigate(`/home/${name}`);
 };

 const handleShare = () => {
  handleCloseModal();
  navigate(`/home/${name}`);
 };

 return (
  <div className="wd-flex-row-container">
   <div className="nav-container long flex-column">
    <Link id={"challengeLink"} className="" to={`/home/${name}`}>
     <img
      id="backarrow"
      src={require("./assets/Backarrow.png")}
      alt="return home"
      className="p-5"
     />
    </Link>

    {showFinishButton && (
     <div class="fixed-bottom py-4">
      <button
       type="button"
       class="finish-button btn btn-secondary m-3 btnx d-flex align-items-end "
       data-dismiss="modal"
       onClick={handleFinishClick}
      >
       Finish
      </button>
     </div>
    )}
   </div>
   <div className="content">
    <Header name={name} />
    {component}
    <Modal show={showModal} onHide={handleCloseModal}>
     <Modal.Header closeButton>
      <Modal.Title>Congratulations!</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <p>
       Well done on completing the challenge!
       <br />
       Would you like to share your accomplishment?
      </p>
     </Modal.Body>
     <Modal.Footer>
      <button
       type="button"
       class="btn btn-secondary m-2 my-3 btnx"
       data-dismiss="modal"
       onClick={handleNope}
      >
       Nope
      </button>
      <button
       type="button"
       class="btn btn-primary m-2 btnx"
       onClick={handleShare}
      >
       Yes!
      </button>
     </Modal.Footer>
    </Modal>
   </div>
  </div>
 );
}

export default DailyChallenge;
