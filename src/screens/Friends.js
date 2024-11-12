// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useFriends } from "../FriendsRequest";
// // import "./Friends.css"; // CSS file for styling

// // function AddFriends() {
// //   const navigate = useNavigate();
// //   const { acceptFriendRequest } = useFriends();

// //   // Mock data for friend suggestions
// //   const friendSuggestions = [
// //     { id: 1, name: "Alice Johnson", username: "alice_j" },
// //     { id: 2, name: "Bob Smith", username: "bob_smith" },
// //     { id: 3, name: "Charlie Davis", username: "charlie_d" },
// //   ];

// //   // Mock data for friend requests
// //   const friendRequests = [
// //     { id: 4, name: "Emily Clark", username: "emily_c" },
// //     { id: 5, name: "Frank Thompson", username: "frank_t" },
// //     { id: 6, name: "Grace Lee", username: "grace_l" },
// //   ];

// //   return (
// //     <div className="add-friends-container">
// //       <button className="back-button" onClick={() => navigate(-1)}>Back</button>
// //       <div className="add-friends-content">
// //         {/* Add Friend Section */}
// //         <div className="add-friend-section">
// //           <h2>Add Friend</h2>
// //           <p>Who would you like to add as a friend?</p>
// //           <input type="text" placeholder="Enter username" className="search-input" />

// //           {friendSuggestions.map((friend) => (
// //             <div key={friend.id} className="friend-suggestion">
// //               <div className="profile-circle"></div>
// //               <div className="friend-info">
// //                 <p className="friend-name">{friend.name}</p>
// //                 <p className="friend-username">{friend.username}</p>
// //               </div>
// //               <button className="add-button">Add</button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Friend Requests Section */}
// //         <div className="friend-requests-section">
// //           <h2>Friend Requests</h2>

// //           {friendRequests.map((request) => (
// //             <div key={request.id} className="friend-request">
// //               <div className="profile-circle"></div>
// //               <div className="friend-info">
// //                 <p className="friend-name">{request.name}</p>
// //                 <p className="friend-username">{request.username}</p>
// //               </div>
// //               <div className="request-buttons">
// //               <button
// //                   className="accept-button"
// //                   onClick={() => acceptFriendRequest(request)} // Call acceptFriendRequest
// //                 >
// //                   ✔️
// //                 </button>
// //                 <button className="reject-button">❌</button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddFriends;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useFriends } from "./FriendsRequest"; // Import useFriends context
// import "./Friends.css";

// function AddFriends() {
//   const navigate = useNavigate();
//   const { friendRequests, acceptFriendRequest, rejectFriendRequest } = useFriends();

//   // Mock data for friend suggestions
//   const friendSuggestions = [
//     { id: 1, name: "Alice Johnson", username: "alice_j" },
//     { id: 2, name: "Bob Smith", username: "bob_smith" },
//     { id: 3, name: "Charlie Davis", username: "charlie_d" },
//   ];

//   return (
//     <div className="add-friends-container">
//       <button className="back-button" onClick={() => navigate(-1)}>Back</button>
//       <div className="add-friends-content">
        
//         {/* Add Friend Section */}
//         <div className="add-friend-section">
//           <h2>Add Friend</h2>
//           <p>Who would you like to add as a friend?</p>
//           <input type="text" placeholder="Enter username" className="search-input" />

//           {friendSuggestions.map((friend) => (
//             <div key={friend.id} className="friend-suggestion">
//               <div className="profile-circle"></div>
//               <div className="friend-info">
//                 <p className="friend-name">{friend.name}</p>
//                 <p className="friend-username">{friend.username}</p>
//               </div>
//               <button className="add-button">Add</button>
//             </div>
//           ))}
//         </div>

//         {/* Friend Requests Section */}
//         <div className="friend-requests-section">
//           <h2>Friend Requests</h2>

//           {friendRequests.map((request) => (
//             <div key={request.id} className="friend-request">
//               <div className="profile-circle"></div>
//               <div className="friend-info">
//                 <p className="friend-name">{request.name}</p>
//                 <p className="friend-username">{request.username}</p>
//               </div>
//               <div className="request-buttons">
//                 <button
//                   className="accept-button"
//                   onClick={() => acceptFriendRequest(request)}
//                 >
//                   ✔️
//                 </button>
//                 <button
//                   className="reject-button"
//                   onClick={() => rejectFriendRequest(request)}
//                 >
//                   ❌
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddFriends;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFriends } from "./FriendsRequest"; // Import useFriends context
import "./Friends.css";

function AddFriends() {
  const navigate = useNavigate();
  const { friendRequests, acceptFriendRequest, rejectFriendRequest } = useFriends();

  // Initial list of friend suggestions
  const [friendSuggestions, setFriendSuggestions] = useState([
    { id: 1, name: "Alice Johnson", username: "alice_j" },
    { id: 2, name: "Bob Smith", username: "bob_smith" },
    { id: 3, name: "Charlie Davis", username: "charlie_d" },
  ]);

  // State for notification message
  const [notification, setNotification] = useState("");

  // Function to handle "Add Friend" button click
  const handleAddFriend = (friendId) => {
    // Remove the friend from the suggestions list
    setFriendSuggestions((prevSuggestions) =>
      prevSuggestions.filter((friend) => friend.id !== friendId)
    );

    // Show notification
    setNotification("Friend Request Sent");

    // Clear notification after 2 seconds
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div className="add-friends-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      <div className="add-friends-content">
        {/* Add Friend Section */}
        <div className="add-friend-section">
          <h2>Add Friend</h2>
          <p>Who would you like to add as a friend?</p>
          <input type="text" placeholder="Enter username" className="search-input" />

          {friendSuggestions.map((friend) => (
            <div key={friend.id} className="friend-suggestion">
              <div className="profile-circle"></div>
              <div className="friend-info">
                <p className="friend-name">{friend.name}</p>
                <p className="friend-username">{friend.username}</p>
              </div>
              <button
                className="add-button"
                onClick={() => handleAddFriend(friend.id)} // Handle add friend
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Friend Requests Section */}
        <div className="friend-requests-section">
          <h2>Friend Requests</h2>

          {friendRequests.map((request) => (
            <div key={request.id} className="friend-request">
              <div className="profile-circle"></div>
              <div className="friend-info">
                <p className="friend-name">{request.name}</p>
                <p className="friend-username">{request.username}</p>
              </div>
              <div className="request-buttons">
                <button
                  className="accept-button"
                  onClick={() => acceptFriendRequest(request)}
                >
                  ✔️
                </button>
                <button
                  className="reject-button"
                  onClick={() => rejectFriendRequest(request)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddFriends;
