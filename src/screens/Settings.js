import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Settings() {
 const { name } = useParams();
 return (
  <div className="wd-flex-row-container">
   {" "}
   <Nav name={name} />
   <div className="mx-2">
    <h2>Settings</h2>
    profile info
    <br />
    username
    <br />
    password
    <br />
    email
    <br />
    manage notifications
    <br />
    delete account
    {name ? (
     <Link to={`/home`}>
      <button class="btnx my-4 px-2 mx-2">Log Out</button>
     </Link>
    ) : (
     <div />
    )}
   </div>
  </div>
 );
}
export default Settings;
