// import Nav from "../Nav";
// import { useParams } from "react-router-dom";

// function Community() {
//  const { name } = useParams();
//  return (
//   <div className="wd-flex-row-container">
//    {" "}
//    <Nav name={name} />
//    <div className="mx-2">
//     <h2>My Community</h2>a couple static examples of community posts (should be
//     able to click on them as in figma)
//     <br />
//     ability to search for freinds?
//    </div>
//   </div>
//  );
// }
// export default Community;


import React, { useState } from "react";
import Nav from "../Nav";
import { useParams } from "react-router-dom";
import "./Community.css"; // Import the specific Community styles

function Community() {
  const { name } = useParams();

  // State to control modal visibility and selected image URL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  // Mock data for the community feed
  const posts = [
    {
      id: 1,
      name: "John Smith",
      time: "4 hr ago",
      content: "Completed today's challenge! Check out this picture I took from my walk!",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5f3c0621820809510f9daf0d/322e8285-a061-45c3-b11d-f6952b8f8228/Forest.jpg?format=2500w",
    },
    {
      id: 2,
      name: "Dylan Parks",
      time: "10 hr ago",
      content: "I AM HAPPY TO SHARE MY 5 MINUTE YOGA EXPERIENCE. IT WAS FASCINATING. Will do again!!",
      imageUrl: null,
    },
    {
      id: 3,
      name: "Patty Green",
      time: "23 hr ago",
      content: "Went for a run and I had to share this beautiful view.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ99fe1lR80Q7WndjuIBPdP0r4_vjBVhkhLg&s",
    },
    {
        id: 4,
        name: "Traci Johnson",
        time: "1 day ago",
        content: "Just played my daily challenge game. What a good way to relax.",
        imageUrl: null,
      },
  ];

  // Function to open the modal with the selected image URL
  const handleImageClick = (url) => {
    setSelectedImageUrl(url);
    setIsModalOpen(true);
  };

  // Function to close the modal
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
          <button className="add-friends-button">Add Friends</button>
        </header>
        
        <div className="post-list">
          {posts.map((post) => (
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

        {/* Modal for viewing the full image */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={handleCloseModal}>Back</button>
              <img src={selectedImageUrl} alt="Full view" className="modal-image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Community;


