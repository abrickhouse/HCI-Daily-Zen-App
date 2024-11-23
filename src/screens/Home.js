//import Header from "../Header";
import logo from "../DailyZen.png";
import "./Home.css";
import Nav from "../Nav";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Home() {

 const { name } = useParams();

 return (
  <div className="wd-flex-row-container">
   {" "}
   <Nav name={name} />
   <div>
     {/* Add logo */}
     <div className="logo-container">
     <img src={logo} alt="Daily Zen Logo" className="logo" />
    </div>
    
    <div className="mx-2">
    <h1 id="helloName">Hello <span id="name">{name}</span> </h1>
     <br />
     <h2> Your Daily Challenge <span style ={{color: '#d9d9d9'}}> 0</span>/1 </h2>
     <div id="challengeDiv"> 
        <Link id={'challengeLink'} to={`/daily-challenge/${name}`}>
        <div id="challenge"></div>
        </Link>
        <span id="challengeName"> Challenge Name</span>
        <span id="challengeDescription"> Small Description of today's challenge</span>
     </div>
     <br />
     
     <h2> Recent Activity From Friends</h2>
     <div className="circle-container">
            <div className="circle black-circle">
              <div className="overlay grey-circle">
                <span className="circle-text">Games</span>
              </div>
            </div>
            <div className="circle black-circle">
              <div className="overlay grey-circle">
                <span className="circle-text">Games</span>
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


