// // src/FriendsRequest.js
// import React, { createContext, useContext, useState } from "react";

// // Create the FriendsRequest context
// const FriendsRequest = createContext();

// // Custom hook to use the FriendsRequest context
// export const useFriends = () => useContext(FriendsRequest);

// export function FriendsProvider({ children }) {
//   const [friends, setFriends] = useState([]);
//   const [posts, setPosts] = useState([
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
//       id: 4,
//       name: "Traci Johnson",
//       time: "1 day ago",
//       content: "Just played my daily challenge game. What a good way to relax.",
//       imageUrl: null,
//     },
//   ]);

//   // Function to accept a friend request
//   const acceptFriendRequest = (friend) => {
//     setFriends((prevFriends) => [...prevFriends, friend]);
//   };

//   return (
//     <FriendsRequest.Provider value={{ friends, posts, acceptFriendRequest }}>
//       {children}
//     </FriendsRequest.Provider>
//   );
// }


// // src/FriendsRequest.js
// import React, { createContext, useContext, useState } from "react";

// // Create the FriendsRequest context
// const FriendsRequest = createContext();

// // Custom hook to use the FriendsRequest context
// export const useFriends = () => useContext(FriendsRequest);

// export function FriendsProvider({ children }) {
//   const [friends, setFriends] = useState([]);
//   const [posts, setPosts] = useState([
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
//       id: 4,
//       name: "Traci Johnson",
//       time: "1 day ago",
//       content: "Just played my daily challenge game. What a good way to relax.",
//       imageUrl: null,
//     },
//   ]);

//   // Function to accept a friend request
//   const acceptFriendRequest = (friend) => {
//     setFriends((prevFriends) => [...prevFriends, friend]);
//   };

//   return (
//     <FriendsRequest.Provider value={{ friends, posts, acceptFriendRequest }}>
//       {children}
//     </FriendsRequest.Provider>
//   );
// }


// import React, { createContext, useContext, useState } from "react";

// // Create the FriendsRequest context
// const FriendsRequest = createContext();

// // Custom hook to use the FriendsRequest context
// export const useFriends = () => useContext(FriendsRequest);

// export function FriendsProvider({ children }) {
//   const [friends, setFriends] = useState([]);
  
//   // Initial community posts
//   const [posts, setPosts] = useState([
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
//       id: 4,
//       name: "Traci Johnson",
//       time: "1 day ago",
//       content: "Just played my daily challenge game. What a good way to relax.",
//       imageUrl: null,
//     },
//   ]);

//   const [friendRequests, setFriendRequests] = useState([
//     { id: 4, name: "Emily Clark", username: "emily_c" },
//     { id: 5, name: "Frank Thompson", username: "frank_t" },
//     { id: 6, name: "Grace Lee", username: "grace_l" },
//   ]);

//   const acceptFriendRequest = (friend) => {
//     setFriends((prevFriends) => [...prevFriends, friend]);
//     setFriendRequests((prevRequests) => 
//       prevRequests.filter((request) => request.id !== friend.id)
//     );
//   };

//   const rejectFriendRequest = (friend) => {
//     setFriendRequests((prevRequests) => 
//       prevRequests.filter((request) => request.id !== friend.id)
//     );
//   };

//   return (
//     <FriendsRequest.Provider
//       value={{ friends, posts, friendRequests, acceptFriendRequest, rejectFriendRequest }}
//     >
//       {children}
//     </FriendsRequest.Provider>
//   );
// }

import React, { createContext, useContext, useState } from "react";

// Create the FriendsRequest context
const FriendsRequest = createContext();

// Custom hook to use the FriendsRequest context
export const useFriends = () => useContext(FriendsRequest);

export function FriendsProvider({ children }) {
  const [friends, setFriends] = useState([]);

  // Initial community posts
  const [posts, setPosts] = useState([]);

  // Mock friend requests with their own posts
  const [friendRequests, setFriendRequests] = useState([
    {
      id: 1,
      name: "Emily Clark",
      username: "emily_c",
      posts: [
        {
          id: 1,
          name: "Emily Clark",
          time: "2 hr ago",
          content: "Loving the weather today! Perfect for a jog.",
          imageUrl: null,
        },
      ],
    },
    {
      id: 2,
      name: "Frank Thompson",
      username: "frank_t",
      posts: [
        {
          id: 2,
          name: "Frank Thompson",
          time: "1 day ago",
          content: "Just finished a 10-mile bike ride!",
          imageUrl: null,
        },
      ],
    },
    {
      id: 3,
      name: "Grace Lee",
      username: "grace_l",
      posts: [
        {
          id: 3,
          name: "Grace Lee",
          time: "3 days ago",
          content: "Exploring new hiking trails. Nature is beautiful!",
          imageUrl: null,
        },
      ],
    },
    {
      id: 4,
      name: "John Smith",
      username: "john_s",
      posts: [
        {
          id: 4,
          name: "John Smith",
          time: "4 hr ago",
          content: "Completed today's challenge! Check out this picture I took from my walk!",
          imageUrl: "https://images.squarespace-cdn.com/content/v1/5f3c0621820809510f9daf0d/322e8285-a061-45c3-b11d-f6952b8f8228/Forest.jpg?format=2500w",
        }]
      
    },
    {
      id: 5,
      name: "Dylan Parks",
      username: "dylan_p",
      posts: [
        {
        id: 5,
        name: "Dylan Parks",
        time: "10 hr ago",
        content: "I AM HAPPY TO SHARE MY 5 MINUTE YOGA EXPERIENCE. IT WAS FASCINATING. Will do again!!",
        imageUrl: null,
        }]
    },
    {
      id: 6,
      name: "Patty Green",
      username: "patty_G",
      posts: [
        {
      id: 6,
      name: "Patty Green",
      time: "23 hr ago",
      content: "Went for a run and I had to share this beautiful view.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ99fe1lR80Q7WndjuIBPdP0r4_vjBVhkhLg&s",
        }]
    },
  ]);

  // Function to accept a friend request
  const acceptFriendRequest = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend]); // Add friend with posts to friends list
    setFriendRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== friend.id)
    );
  };

  // Function to reject a friend request
  const rejectFriendRequest = (friend) => {
    setFriendRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== friend.id)
    );
  };

  return (
    <FriendsRequest.Provider
      value={{ friends, posts, friendRequests, acceptFriendRequest, rejectFriendRequest }}
    >
      {children}
    </FriendsRequest.Provider>
  );
}
