import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import LogIn from "./screens/Login";
import Settings from "./screens/Settings";
import Community from "./screens/Community";
import Profile from "./screens/Profile";
import Friends from "./screens/Friends";
import DeleteAcc from "./screens/DeleteAcc";
import SignupChoose from "./screens/SignupChoose";
import SignupFriends from "./screens/SignupFriends";
import { FriendsProvider } from "./screens/FriendsRequest";
import SetFriend from "./screens/settingSubPages/setFriend";
import SetNotif from "./screens/settingSubPages/setNotif";
import SetEmail from "./screens/settingSubPages/setEmail";
import DailyChallenge from "./screens/DailyChallenge"
import SetPass from "./screens/settingSubPages/setPass";

function App() {
 return (
  <FriendsProvider>
   <HashRouter>
    <div className="body">
     <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home/:name" element={<Home />} />
      <Route path="/home/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/settings/:name" element={<Settings />} />
      <Route path="/settings/" element={<Settings />} />
      <Route path="/community/:name" element={<Community />} />
      <Route path="/community/" element={<Community />} />
      <Route path="/profile/:name/:other?" element={<Profile />} />
      <Route path="/profile/" element={<Profile />} />
      <Route path="/add-friends" element={<Friends />} />
      <Route path="/deleted" element={<DeleteAcc />} />
      <Route path="/signup2/:name" element={<SignupChoose />} />
      <Route path="/signup3/:name" element={<SignupFriends />} />
      <Route path="/manage-friends/:name" element={<SetFriend />} />
      <Route path="/notifications/:name" element={<SetNotif />} />
      <Route path="/change-email/:name" element={<SetEmail />} />
      <Route path="/change-password/:name" element={<SetPass />} />
      <Route path="/daily-challenge/:name" element={<DailyChallenge />} />
     </Routes>
    </div>
   </HashRouter>
  </FriendsProvider>
 );
}

export default App;
