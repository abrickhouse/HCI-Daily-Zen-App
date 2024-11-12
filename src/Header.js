import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "./DailyZen.png";

function Header() {
 const { name } = useParams();
 return (
  <div className="d-flex justify-content-center sticky-top nav-header py-2">
   {name ? (
    <nav class="navbar navbar-light nav-head ">
     <Link to={`/home/${name}`}>
      <img src={logo} className="app-logo" alt="logo" />
     </Link>
    </nav>
   ) : (
    <nav class="navbar navbar-light nav-head d-block">
     <Link to={`/home/`}>
      <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
     </Link>
    </nav>
   )}
   <hr />
  </div>
 );
}
export default Header;