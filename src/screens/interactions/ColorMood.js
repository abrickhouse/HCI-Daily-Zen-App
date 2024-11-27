import React, { useState, useEffect } from "react";

const ColorMood = () => {
 const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
 const [color, setColor] = useState("rgb(70, 112, 104)");
 const [speed, setSpeed] = useState(1);
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  if (window.matchMedia("(max-width: 768px)").matches) {
   setIsMobile(true);
  }

  const handleMouseMove = (event) => {
   setMousePos({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => {
   window.removeEventListener("mousemove", handleMouseMove);
  };
 }, []);

 useEffect(() => {
  const red = Math.min(255, (mousePos.x / window.innerWidth) * 255);
  const blue = Math.min(255, 255 - (mousePos.x / window.innerWidth) * 255);
  const green = Math.min(255, (mousePos.y / window.innerHeight) * 255);
  const newColor = `rgb(${red}, ${green}, ${blue})`;
  setColor(newColor);
  if (isMobile && navigator.vibrate) {
   navigator.vibrate([200]);
  }
 }, [mousePos, isMobile]);

 const handleSpeedChange = (e) => {
  setSpeed(e.target.value);
 };

 const containerStyle = {
  height: "85vh",
  background: color,
  transition: `background-color ${speed}s ease`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
 };

 return (
  <div style={containerStyle} className="edges">
   <div>
    <h1>Color Mood Exploration</h1>
    <p>
     Move your mouse to change the colors dynamically.
     <br />
     Use the slider to adjust the speed of the transition.
    </p>
    <br />
    <p>Try making the color that best represents your current mood.</p>

    <div className="mt-3">
     <input
      type="range"
      id="speed"
      min="0.1"
      max="5"
      step="0.1"
      value={speed}
      onChange={handleSpeedChange}
      className="form-range"
     />
     <label htmlFor="speed" className="form-label">
      Speed: {speed}s
     </label>
    </div>
   </div>
  </div>
 );
};

export default ColorMood;
