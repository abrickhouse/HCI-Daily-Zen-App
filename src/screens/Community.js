// import React, { useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import logo from "./DailyZen.png";
// import { useFriends } from "./FriendsRequest"; // Import useFriends
// import Nav from "../Nav";
// import "./Community.css";
// import Header from "../Header";

// function Community() {
//  const { name } = useParams();
//  const navigate = useNavigate();
//  const { posts, friends } = useFriends(); // Access posts and friends

//  const [isModalOpen, setIsModalOpen] = useState(false);
//  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

//  // Combine community posts with posts from friends
//  const allPosts = [
//   ...posts,
//   ...friends.flatMap((friend) => friend.posts || []), // Assume friends have posts
//  ];

//  const handleImageClick = (url) => {
//   setSelectedImageUrl(url);
//   setIsModalOpen(true);
//  };

//  const handleCloseModal = () => {
//   setIsModalOpen(false);
//   setSelectedImageUrl(null);
//  };

//  return (
//   <div className="wd-flex-row-container">
//    <div className="nav-container">
//     <Nav name={name} />
//    </div>
//    <div className="main-content">
//     <header className="community-header">
//      <h2>Community</h2>
//      <button
//       className="add-friends-button"
//       onClick={() => navigate("/add-friends")}
//      >
//       Add Friends
//      </button>
//     </header>

//     <div className="post-list">
//      {allPosts.map((post) => (
//       <div key={post.id} className="post">
//        <div className="post-header">
//         <Link  className="post-name" to={`/Profile/${name}/${post.name}`}>{post.name}</Link>
//         <span className="post-time">{post.time}</span>
//        </div>
//        <div className="post-content">{post.content}</div>
//        {post.imageUrl && (
//         <div
//          className="post-image"
//          onClick={() => handleImageClick(post.imageUrl)}
//         >
//          <img src={post.imageUrl} alt="Post content" className="post-img" />
//          <div className="overlay-text">Click to view</div>
//         </div>
//        )}
//       </div>
//      ))}
//     </div>

//     {isModalOpen && (
//      <div className="modal-overlay" onClick={handleCloseModal}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//        <button className="close-button" onClick={handleCloseModal}>
//         Back
//        </button>
//        <img src={selectedImageUrl} alt="Full view" className="modal-image" />
//       </div>
//      </div>
//     )}
//    </div>
//   </div>
//  );
// }

// export default Community;

import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import logo from "../DailyZen.png";
import { useFriends } from "./FriendsRequest"; // Import useFriends
import Nav from "../Nav";
import "./Community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
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
   <div className="content">
    <Header name={name} />
    <div className="community-header">
     <h2 className="mainheader mx-2 px-3 wide text">Community</h2>
     <div>
      {name ? (
       <button
        className="add-friend-btn white-text"
        onClick={() => navigate("/add-friends")}
       >
        Add Friends
       </button>
      ) : (
       <button
        className="add-friend-btn white-text"
        onClick={() => navigate("/add-friends")}
        disabled
       >
        Add Friends
       </button>
      )}
     </div>
    </div>

    {name ? (
     <div className="post-list mx-2 px-3">
      {allPosts.map((post) => (
       <div key={post.id} className="post">
        <div className="post-header">
         <Link className="post-name text" to={`/Profile/${name}/${post.name}`}>
          <FontAwesomeIcon icon={faCircleUser} size="1x" className="zIcon" />{" "}
          {post.name}
         </Link>
         <span className="post-time light-text">{post.time}</span>
        </div>
        <div className="post-content light-text">{post.content}</div>
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
    ) : (
     <p className="text px-5"> Log in to add friends!</p>
    )}

    {isModalOpen && (
     <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
       <button className="close-button white-text" onClick={handleCloseModal}>
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
