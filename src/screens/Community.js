// import React, { useState } from "react";
// import Nav from "../Nav";
// import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
// import "./Community.css"; // Ensure you import the specific Community styles

// function Community() {
//   const { name } = useParams();
//   const navigate = useNavigate(); // Initialize navigate

//   // State to control modal visibility and selected image URL
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageUrl, setSelectedImageUrl] = useState(null);

//   const [acceptedFriends, setAcceptedFriends] = useState([]);

//   // Mock data for the community feed
//   const posts = [
//     {
//       id: 1,
//       name: "John Smith",
//       time: "4 hr ago",
//       content: "Completed today's challenge! Check out this picture I took from my walk!",
//       imageUrl: "https://images.squarespace-cdn.com/content/v1/5f3c0621820809510f9daf0d/322e8285-a061-45c3-b11d-f6952b8f8228/Forest.jpg?format=2500w",
//     },
//     {
//       id: 2,
//       name: "Dylan Parks",
//       time: "10 hr ago",
//       content: "I AM HAPPY TO SHARE MY 5 MINUTE YOGA EXPERIENCE. IT WAS FASCINATING. Will do again!!",
//       imageUrl: null,
//     },
//     {
//       id: 3,
//       name: "Patty Green",
//       time: "23 hr ago",
//       content: "Went for a run and I had to share this beautiful view.",
//       imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ99fe1lR80Q7WndjuIBPdP0r4_vjBVhkhLg&s",
//     },
//     {
//         id: 4,
//         name: "Traci Johnson",
//         time: "1 day ago",
//         content: "Just played my daily challenge game. What a good way to relax.",
//         imageUrl: null,
//       },
//   ];

//   // Callback to handle adding a friend
//   const handleAcceptFriend = (friend) => {
//     setAcceptedFriends((prevAcceptedFriends) => [...prevAcceptedFriends, friend]);
//   };

//     // Filter posts based on accepted friends
//   const filteredPosts = posts.filter((post) =>
//     acceptedFriends.some((friend) => friend.name === post.name)
//   );

//   // Function to open the modal with the selected image URL
//   const handleImageClick = (url) => {
//     setSelectedImageUrl(url);
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedImageUrl(null);
//   };

//   return (
//     <div className="wd-flex-row-container">
//       <div className="nav-container">
//         <Nav name={name} />
//       </div>
//       <div className="main-content">
//         <header className="community-header">
//           <h2>Community</h2>
//           {/* Add Friends button with navigation to /add-friends */}
//           <button
//             className="add-friends-button"
//             onClick={() => navigate("/add-friends")} // Navigates to AddFriends page
//           >
//             Add Friends
//           </button>
//         </header>

//         <div className="post-list">
//           {posts.map((post) => (
//             <div key={post.id} className="post">
//               <div className="post-header">
//                 <span className="post-name">{post.name}</span>
//                 <span className="post-time">{post.time}</span>
//               </div>
//               <div className="post-content">{post.content}</div>
//               {post.imageUrl && (
//                 <div
//                   className="post-image"
//                   onClick={() => handleImageClick(post.imageUrl)}
//                 >
//                   <img src={post.imageUrl} alt="Post content" className="post-img" />
//                   <div className="overlay-text">Click to view</div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Modal for viewing the full image */}
//         {isModalOpen && (
//           <div className="modal-overlay" onClick={handleCloseModal}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button className="close-button" onClick={handleCloseModal}>Back</button>
//               <img src={selectedImageUrl} alt="Full view" className="modal-image" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Community;

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
