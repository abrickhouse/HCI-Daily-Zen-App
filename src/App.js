import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Settings from "./screens/Settings";
import Community from "./screens/Community";
import Profile from "./screens/Profile";

function App() {
 return (
  <HashRouter>
   <div class="body">
    <Routes>
     <Route path="/signup" element={<Signup />} />
     <Route path="/home/:name" element={<Home />} />
     <Route path="/home/" element={<Home />} />
     <Route path="/" element={<Home />} />
     <Route path="/settings/:name" element={<Settings />} />
     <Route path="/settings/" element={<Settings />} />
     <Route path="/community/:name" element={<Community />} />
     <Route path="/community/" element={<Community />} />
     <Route path="/profile/:name" element={<Profile />} />
     <Route path="/profile/" element={<Profile />} />
    </Routes>
   </div>
  </HashRouter>
 );
}

export default App;
