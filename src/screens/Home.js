import "./Home.css";
import Nav from "../Nav";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useFriends } from "./FriendsRequest"; // Import useFriends
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"; // journal
import { faHeartCircleBolt } from "@fortawesome/free-solid-svg-icons"; // gratitude
import { faPalette } from "@fortawesome/free-solid-svg-icons"; // color
import { faPerson } from "@fortawesome/free-solid-svg-icons"; // yoga

function Home() {
 const { name } = useParams();
 const { friends } = useFriends(); // Access posts and friends

 return (
  <div className="wd-flex-row-container">
   <div className="nav-container">
    <Nav name={name} />
   </div>
   <div className="content">
    <Header name={name} />
    <div className="mx-2 px-3 wide">
     <h4 className="mainheader text my-2">
      Hello <span id="name">{name}</span>
     </h4>
     <h5 className="partheader text">
      Your Daily Challenge <span style={{ color: "#afc8a2" }}> 0</span>/1{" "}
     </h5>

     <div className="my-4">
      <div className="">
       <div class="row">
        <div class="col">
         {name ? (
          <Link to={`/daily-challenge/color/${name}`}>
           <div className="d-flex maybeGame align-items-center justify-content-center m-1">
            <FontAwesomeIcon icon={faPalette} size="5x" />
            <div className="px-4">
             <h5>Mood</h5>
             <p>Explore mood through color</p>
            </div>
           </div>
          </Link>
         ) : (
          <Link to={`/daily-challenge/color/`}>
           <div className="d-flex maybeGame align-items-center justify-content-center m-1">
            <FontAwesomeIcon icon={faPalette} size="5x" />
            <div className="px-4">
             <h5>Mood</h5>
             <p>Explore mood through color</p>
            </div>
           </div>
          </Link>
         )}
        </div>
        <div class="col">
         {name ? (
          <Link to={`/daily-challenge/journal/${name}`}>
           <div className="d-flex maybeGame align-items-center justify-content-center m-1">
            <FontAwesomeIcon icon={faPen} size="5x" />
            <div className="px-4">
             <h5>Journal</h5>
             <p>Record your thoughts</p>
            </div>
           </div>
          </Link>
         ) : (
          <Link to={`/daily-challenge/journal/`}>
           <div className="d-flex maybeGame align-items-center justify-content-center m-1">
            <FontAwesomeIcon icon={faPen} size="5x" />
            <div className="px-4">
             <h5>Journal</h5>
             <p>Record your thoughts</p>
            </div>
           </div>
          </Link>
         )}
        </div>
        <div class="w-100"></div>
        <div class="col">
         {name ? (
          <Link to={`/daily-challenge/gratitude/${name}`}>
           <div className="d-flex maybeGame align-items-center  justify-content-center m-1">
            <FontAwesomeIcon icon={faHeartCircleBolt} size="5x" />
            <div className="px-4">
             <h5>Gratitude</h5>
             <p>What drives you?</p>
            </div>
           </div>
          </Link>
         ) : (
          <Link to={`/daily-challenge/gratitude/`}>
           <div className="d-flex maybeGame align-items-center  justify-content-center m-1">
            <FontAwesomeIcon icon={faHeartCircleBolt} size="5x" />
            <div className="px-4">
             <h5>Gratitude</h5>
             <p>What drives you?</p>
            </div>
           </div>
          </Link>
         )}
        </div>
        <div class="col">
         {name ? (
          <Link to={`/daily-challenge/yoga/${name}`}>
           <div className="d-flex maybeGame align-items-center justify-content-center m-1">
            <FontAwesomeIcon icon={faPerson} size="5x" />
            <div className="px-4">
             <h5>Yoga</h5>
             <p>Move your body</p>
            </div>
           </div>
          </Link>
         ) : (
          <Link to={`/daily-challenge/yoga/`}>
           <div className="d-flex maybeGame align-items-center justify-content-center m-1">
            <FontAwesomeIcon icon={faPerson} size="5x" />
            <div className="px-4">
             <h5>Yoga</h5>
             <p>Move your body</p>
            </div>
           </div>
          </Link>
         )}
        </div>
       </div>
      </div>
     </div>

     {name && (
      <div>
       <h5 className="partheader text py-2"> Recent Activity From Friends</h5>
       <div className="row">
        {friends.map((fr) => (
         <Link
          className="col align-content-center"
          to={`/Profile/${name}/${fr.name}`}
         >
          <div className="pt-5 pb-4">
           <span className="fa-layers fa-fw">
            <FontAwesomeIcon
             icon={faCircleUser}
             size="5x"
             className="zIcon"
             style={{ color: "#000" }}
            />
            {fr.streak && (
             <FontAwesomeIcon
              icon={faFire}
              size="2x"
              style={{ color: "#973544" }}
              transform="right-28 down-11"
              className="zIcon"
             />
            )}
           </span>
          </div>
          <div className="px-2">{fr.username}</div>
         </Link>
        ))}
       </div>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}
export default Home;
