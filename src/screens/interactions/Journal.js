import React, { useState, useEffect } from "react";

const prompts = [
 "What are three things you're grateful for today?",
 "Take a moment to notice how you're feeling right now.",
 "What is one small thing you can do today to bring yourself peace?",
 "Describe a positive experience you had today.",
 "What is something you appreciate about yourself today?",
];

const Journal = () => {
 const [timer, setTimer] = useState(0);
 const [isTimerActive, setIsTimerActive] = useState(false);
 const [response, setResponse] = useState("");
 const [prompt, setPrompt] = useState("");
 const [timeRemaining, setTimeRemaining] = useState(0);

 useEffect(() => {
  const promptIndex = new Date().getDate() % prompts.length;
  setPrompt(prompts[promptIndex]);

  if (isTimerActive) {
   setTimeRemaining(timer);
  } else {
   setTimeRemaining(0);
  }
 }, [isTimerActive, timer]);

 useEffect(() => {
  let interval;
  if (isTimerActive && timeRemaining > 0) {
   interval = setInterval(() => {
    setTimeRemaining((prev) => prev - 1);
   }, 1000);
  }

  return () => clearInterval(interval);
 }, [isTimerActive, timeRemaining]);

 const handleStartTimer = (timeLimit) => {
  setTimer(timeLimit * 60);
  setIsTimerActive(true);
 };

 const handleStopTimer = () => {
  setIsTimerActive(false);
  setTimeRemaining(0);
 };

 const handleResponseChange = (event) => {
  setResponse(event.target.value);
 };

 const progress = (timeRemaining / timer) * 100;
 return (
  <div className="container mt-5">
   <div className="text-center">
    <h1 text className="text"> Mindful Journaling Prompt</h1>
    <h3 className="my-4 text">{prompt}</h3>

    <textarea
     className="form-control mb-3"
     rows="15"
     value={response}
     onChange={handleResponseChange}
     placeholder="Write your thoughts here..."
    ></textarea>
    <div className="mb-4">
     {!isTimerActive ? (
      <div>
       <button
        className="btn btn-light me-3 btnx white-text"
        onClick={() => handleStartTimer(5)}
       >
        Start 5-Minute Timer
       </button>
       <button
        className="btn btn-light me-3 btnx white-text"
        onClick={() => handleStartTimer(10)}
       >
        Start 10-Minute Timer
       </button>
      </div>
     ) : (
      <div>
       <div className="progress my-4">
        <div
         className="progress-bar progress-bar-striped progress-bar-animated"
         role="progressbar"
         style={{ width: `${progress}%` }}
         aria-valuenow={progress}
         aria-valuemin="0"
         aria-valuemax="100"
        ></div>
       </div>

       <p className="fs-4">{timeRemaining}s remaining</p>
       <button
        className="btn btn-primary m-2 btnx-d delete-btn"
        onClick={handleStopTimer}
       >
        Stop Timer
       </button>
      </div>
     )}
    </div>
   </div>
  </div>
 );
};

export default Journal;


