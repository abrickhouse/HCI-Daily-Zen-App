import React, { useState } from "react";

const imageList = [
 "https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_6_abfec1a7-5aa4-4c97-a7d8-165cc1368b5c.jpg?v=1721727613",
 "https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_7_23564e28-ff1e-47b2-90ab-c635770178ba.jpg?v=1721727675",
 "https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_8_eb927534-49c5-4e5c-9fef-f4d5a31c132d.jpg?v=1721727718",
 "https://cdn.shopify.com/s/files/1/0592/3861/files/Untitled_1500_x_600_px_9_30e09d73-38b7-4059-b370-7415ab0a4f88.jpg?v=1721728440",
];

const Yoga = () => {
 const containerStyle = {
  height: "70vh",
  paddingTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
 };

 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const handleLeftClick = () => {
  setCurrentImageIndex((prevIndex) =>
   prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
  );
 };
 const handleRightClick = () => {
  setCurrentImageIndex((prevIndex) =>
   prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
  );
 };
 return (
  <div style={containerStyle} className="edges">
   <div className="wd-flex-row-container">
    <div className="w-100">
     <h1 className="text"> Yoga Challenge</h1>
     <h3 className="my-4 text">
      Today, practice yoga for a few minutes. Try hold each pose for at least 30
      seconds.
     </h3>
    </div>
   </div>
   <div>
    <img
     id="arrowLeft"
     className="align-self-center"
     src={require("../assets/Backarrow.png")}
     onClick={handleLeftClick}
     alt="previous pose"
    />
    <img
     className="w-75 align-self-center"
     id="pose"
     src={imageList[currentImageIndex]}
     alt="Yoga Pose"
    />
    <img
     id="arrowRight"
     className="align-self-center"
     src={require("../assets/Backarrow.png")}
     onClick={handleRightClick}
     alt="next pose"
    />
   </div>
  </div>
 );
};

export default Yoga;
