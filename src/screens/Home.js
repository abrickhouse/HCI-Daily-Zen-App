import "./Home.css";
import Nav from "../Nav";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header";
import ColorMood from "./interactions/ColorMood";
import Yoga from "./interactions/Yoga";
import Gratitude from "./interactions/Gratitude";
import Journal from "./interactions/Journal";

function Home() {
 const { name } = useParams();

 return (
  <div className="wd-flex-row-container">
   <div className="nav-container">
    <Nav name={name} />
   </div>
   <div className="content">
    <Header name={name} />
    <div className="mx-2 px-3 wide">
     <h2 className="mainheader my-2">
      Hello <span id="name">{name}</span>
     </h2>
     <h4 className="partheader">
      Your Daily Challenge <span style={{ color: "#d9d9d9" }}> 0</span>/1{" "}
     </h4>

     <div id="challengeDiv" className="my-4">
      <div className="challengeBox d-flex align-items-center justify-content-around m-4">
       <div class="row">
        <div class="col">
         <Link to={`/daily-challenge/color/${name}`}>
          {" "}
          <div className="d-flex maybeGame align-items-center justify-content-center m-4">
           <p className="pt-2">Mood</p>
          </div>
         </Link>
        </div>
        <div class="col">
         <Link to={`/daily-challenge/journal/${name}`}>
          {" "}
          <div className="d-flex maybeGame align-items-center justify-content-center m-4">
           <p className="pt-2">Journal</p>
          </div>
         </Link>
        </div>
        <div class="w-100"></div>
        <div class="col">
         {" "}
         <Link to={`/daily-challenge/gratitude/${name}`}>
          {" "}
          <div className="d-flex maybeGame align-items-end  justify-content-center m-4">
           <p className="pt-2">Gratitude</p>
          </div>
         </Link>
        </div>
        <div class="col">
         {" "}
         <Link to={`/daily-challenge/yoga/${name}`}>
          {" "}
          <div className="d-flex maybeGame align-items-center justify-content-center m-4">
           <p className="pt-2"> Yoga</p>
          </div>
         </Link>
        </div>
       </div>
      </div>
      <h5 className="pt-5 p-1">Challenge Name</h5>
      <p id="challengeDescription"> Small Description of today's challenge</p>
     </div>

     <h3 className="partheader"> Recent Activity From Friends</h3>
     <div className="circle-container">
      <div className="circle black-circle">
       <div className="overlay grey-circle">
        <span className="circle-text">Games</span>
       </div>
      </div>
      <div className="circle black-circle">
       <div className="overlay grey-circle">
        <span className="circle-text">Yoga</span>
       </div>
      </div>
      <div className="circle black-circle">
       <div className="overlay grey-circle">
        <span className="circle-text">Games</span>
       </div>
      </div>
      <div className="circle grey-circle"></div>
     </div>
    </div>
   </div>
  </div>
 );
}
export default Home;
