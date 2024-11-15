import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFriends } from "./FriendsRequest"; // Import useFriends
import Nav from "../Nav";
import "./Community.css";
import Header from "../Header";

function Community() {
 const { name } = useParams();
 const navigate = useNavigate();
 const { posts, friends } = useFriends(); // Access posts and friends

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedImageUrl, setSelectedImageUrl] = useState(null);

 // Combine community posts with posts from friends
 const allPosts = [
  ...posts,
  ...friends.flatMap((friend) => friend.posts || []), // Assume friends have posts
 ];

 const handleImageClick = (url) => {
  setSelectedImageUrl(url);
  setIsModalOpen(true);
 };

 const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedImageUrl(null);
 };

 return (
  <div className="wd-flex-row-container">
   <div className="nav-container">
    <Nav name={name} />
   </div>
   <div className="main-content">
    <header className="community-header">
     <h2>Community</h2>
     <button
      className="add-friends-button"
      onClick={() => navigate("/add-friends")}
     >
      Add Friends
     </button>
    </header>

    <div className="post-list">
     {allPosts.map((post) => (
      <div key={post.id} className="post">
       <div className="post-header">
        <span className="post-name">{post.name}</span>
        <span className="post-time">{post.time}</span>
       </div>
       <div className="post-content">{post.content}</div>
       {post.imageUrl && (
        <div
         className="post-image"
         onClick={() => handleImageClick(post.imageUrl)}
        >
         <img src={post.imageUrl} alt="Post content" className="post-img" />
         <div className="overlay-text">Click to view</div>
        </div>
       )}
      </div>
     ))}
    </div>

    {isModalOpen && (
     <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
       <button className="close-button" onClick={handleCloseModal}>
        Back
       </button>
       <img src={selectedImageUrl} alt="Full view" className="modal-image" />
      </div>
     </div>
    )}
   </div>
  </div>
 );
}

export default Community;

