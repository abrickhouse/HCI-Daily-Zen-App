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
import DailyChallenge from "./screens/DailyChallenge";
import SetPass from "./screens/settingSubPages/setPass";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Journal from "./screens/interactions/Journal";
import ColorMood from "./screens/interactions/ColorMood";
import Gratitude from "./screens/interactions/Gratitude";
import Yoga from "./screens/interactions/Yoga";

function App() {
 return (
  <DndProvider backend={HTML5Backend}>
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
       <Route
        path="/daily-challenge/journal/:name"
        element={<DailyChallenge component={<Journal />} />}
       />
       <Route
        path="/daily-challenge/yoga/:name"
        element={<DailyChallenge component={<Yoga />} />}
       />
       <Route
        path="/daily-challenge/color/:name"
        element={<DailyChallenge component={<ColorMood />} />}
       />
       <Route
        path="/daily-challenge/gratitude/:name"
        element={<DailyChallenge component={<Gratitude />} />}
       />
       <Route
        path="/daily-challenge/journal/"
        element={<DailyChallenge component={<Journal />} />}
       />
       <Route
        path="/daily-challenge/yoga/"
        element={<DailyChallenge component={<Yoga />} />}
       />
       <Route
        path="/daily-challenge/color/"
        element={<DailyChallenge component={<ColorMood />} />}
       />
       <Route
        path="/daily-challenge/gratitude/"
        element={<DailyChallenge component={<Gratitude />} />}
       />
      </Routes>
     </div>
    </HashRouter>
   </FriendsProvider>
  </DndProvider>
 );
}

export default App;
