import "./DailyChallenge.css";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../DailyZen.png";

const imageList = [
  'https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_6_abfec1a7-5aa4-4c97-a7d8-165cc1368b5c.jpg?v=1721727613',
  'https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_7_23564e28-ff1e-47b2-90ab-c635770178ba.jpg?v=1721727675',
  'https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_8_eb927534-49c5-4e5c-9fef-f4d5a31c132d.jpg?v=1721727718',
  'https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_9_30e09d73-38b7-4059-b370-7415ab0a4f88.jpg?v=1721728440',
];

function DailyChallenge() {
 const { name } = useParams();
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const handleLeftClick = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
};
const handleRightClick = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
};

 return (
  <div>
  <div id="logo-container">
     <img src={logo} alt="Daily Zen Logo" id="logo" />
  </div>
  <div className="wd-flex-row-container">
   {" "}
    <div>
      <Link id={'challengeLink'}  to={`/home/${name}`}>
      <img id = "backarrow" src={ require('./assets/Backarrow.png') } alt="return home"/>
      </Link>
      <h2 id="ChallengeTitle"> Your Daily Challenge</h2>
      <h3 id="ChallengeTitle"> Today, practice yoga for a few minutes. Try hold each pose for at least 30 seconds.</h3>
    </div>
   </div>
   <div id="container">
      <img id = "arrowLeft" src={require('./assets/Backarrow.png') } onClick={handleLeftClick} alt = "previous pose"/>
      <img id = "pose" src={imageList[currentImageIndex]} alt="Yoga Pose" />
      <img id = "arrowRight" src={require('./assets/Backarrow.png') } onClick={handleRightClick} alt = "next pose"/>
    </div>
  </div>
 );
}
export default DailyChallenge;

/*
 <button className="arrow left" onClick={handleLeftClick}>
        &larr; Left Arrow
      </button>

*/


