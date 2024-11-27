import { Link } from "react-router-dom";
import Nav from "../../Nav";
import { useState } from "react";
import logo from "../../DailyZen.png";
import { useParams } from "react-router-dom";

function SetFriend() {
 const { name } = useParams();
 const [friends, setFriends] = useState([
  { id: 1, name: "Kiara Madison", username: "k_madison" },
  { id: 2, name: "Triana Ware", username: "triana" },
  { id: 3, name: "Steph Kyle", username: "stephk" },
  { id: 4, name: "Cocoa Grigsby", username: "cocoa" },
  { id: 5, name: "Oliver Brickhouse", username: "oli_b" },
  { id: 6, name: "Cheetor Blair", username: "cheeto" },
  { id: 7, name: "Jahvon Roberts", username: "jroberts" },
  { id: 8, name: "Rhinox Brickhouse", username: "rhinoxx" },
  { id: 9, name: "Hailey Dane", username: "dane.h" },
 ]);

 return (
  <div className="input-screen p-5 text-center">
   <Link to={`/home/${name}`}>
    <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
   </Link>
   <h1 className="mainheader py-4 text">Manage Friends</h1>
   <div className="input-card p-3 overflow-auto max-set-height">
    <input
     type="text"
     placeholder="Enter username"
     className="search-input px-3 stick"
    />

    {friends.map((friend) => (
     <div key={friend.id} className="friend-suggestion">
      <div className="profile-circle"></div>
      <div className="friend-info">
       <p className="friend-name mb-1">{friend.name}</p>
       <p className="friend-username ">{friend.username}</p>
      </div>
      <button className="add-button">Friends</button>
     </div>
    ))}
    <Link to={`/settings/${name}`}>
     <button class="btn btn-dark btnx-d px-4 m-2 btn-lg stick2 save">Done</button>
    </Link>
   </div>
  </div>
 );
}
export default SetFriend;
