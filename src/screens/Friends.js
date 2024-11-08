import React from "react";
import { useNavigate } from "react-router-dom";
import "./Friends.css"; // CSS file for styling

function AddFriends() {
  const navigate = useNavigate();

  // Mock data for friend suggestions
  const friendSuggestions = [
    { id: 1, name: "Alice Johnson", username: "alice_j" },
    { id: 2, name: "Bob Smith", username: "bob_smith" },
    { id: 3, name: "Charlie Davis", username: "charlie_d" },
  ];

  // Mock data for friend requests
  const friendRequests = [
    { id: 4, name: "Emily Clark", username: "emily_c" },
    { id: 5, name: "Frank Thompson", username: "frank_t" },
    { id: 6, name: "Grace Lee", username: "grace_l" },
  ];

  return (
    <div className="add-friends-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
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
              <button className="add-button">Add</button>
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
                <button className="accept-button">✔️</button>
                <button className="reject-button">❌</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddFriends;
