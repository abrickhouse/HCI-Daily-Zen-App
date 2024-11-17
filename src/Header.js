import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "./DailyZen.png";

function Header() {
 const { name } = useParams();
 return (
  <div className="navbar navbar-expand-lg navbar-light wide">
   <nav class="navbar-header justify-content-center d-block w-100">
    {name ? (
     <Link to={`/home/${name}`}>
      <img
       src={logo}
       className="img-fluid app-logo mx-auto d-block"
       alt="logo"
      />
     </Link>
    ) : (
     <Link to={`/home/`}>
      <img src={logo} className="app-logo mx-auto d-block" alt="logo" />
     </Link>
    )}
   </nav>
   <hr />
  </div>
 );
}
export default Header;
