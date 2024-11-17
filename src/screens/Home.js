import Header from "../Header";
import Nav from "../Nav";
import { useParams } from "react-router-dom";

function Home() {
 const { name } = useParams();
 return (
  <div className="wd-flex-row-container">
   {" "}
   <div className="nav-container">
    <Nav name={name} />
   </div>
   <div className="content">
    <Header name={name} />
    <div className="mx-2">
     <h2>home</h2>
     hello {name}
     <br />
     your daily challenge (link to one playable challenge)
     <br />
     friends activity
    </div>
   </div>
  </div>
 );
}
export default Home;
