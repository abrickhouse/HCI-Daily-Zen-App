import Nav from "../Nav";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import React, { useState } from "react";

function Profile() {
 const { name, other } = useParams();
 const [isFriends, setIsFriends] = useState(false);
 const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
  (day) => (
   <th className="day" key={day}>
    {day}
   </th>
  )
 );
 const days = [...Array(5)].map((_, rowIndex) => (
  <tr key={rowIndex}>
   {Array.from({ length: 7 }).map((_, colIndex) => {
    const day = rowIndex * 7 + colIndex - 4; // Adjust the starting day
    return (
     <th
      className={day >= 7 && day <= 14 ? "completed" : "incomplete"}
      key={colIndex}
     >
      {day > 0 && day <= 30 ? day : ""}
     </th>
    );
   })}
  </tr>
 ));

 const addFriend = other ? (
  <button onClick={() => setIsFriends(!isFriends)} className="add-friend-btn">
   {isFriends ? "Unfriend" : "+ Add Friend"}
  </button>
 ) : (
  <></>
 );
 const username = other ? other : name;

 return (
  <div className="wd-flex-row-container">
   <div className="nav-container">
    <Nav name={name} />
   </div>
   <div className="content">
    <Header name={name} />
    <div className="mx-2">
     <div className="wd-flex-row-container">
      <div>
       <FontAwesomeIcon icon={faUser} size="9x" />
      </div>
      <div className="info">
       <div className="wd-flex-row-container">
        <div>
         <h2>{username}</h2>
        </div>
        <div>{addFriend}</div>
       </div>
       9 Friends
       <br />
       Joined Oct. 10, 2024
       <br />
       Challenges Completed 25
       <br />
       Longest Streak: 7
      </div>
     </div>
    </div>
    {/* Calendar */}
    <div>
     <h3 className="month">November</h3>
     <table className="calendar">
      <thead>
       <tr>{weekdays}</tr>
       {days}
      </thead>
     </table>
    </div>
   </div>
  </div>
 );
}

export default Profile;
