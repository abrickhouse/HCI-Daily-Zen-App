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
    {name ? (
     <div>
      Change challenge category
      <br />
      Change password
      <br />
      Change email
      <br />
      Notifications
      <br />
      Manage Friends
      <br /> Log out
      <br />
      Delete account
      <Link to={`/home`}>
       <button class="btn my-4 px-2 mx-2">Log Out</button>
      </Link>
     </div>
    ) : (
     <div>
      <Link to={`/login`}>
       <button class="btn btn-light px-4 btnx">Log in</button>
      </Link>
      <br />{" "}
      <Link to={`/signup`}>
       <button class="btn">Sign up</button>
      </Link>
     </div>
    )}
    <div />
   </div>
  </div>
 );
}
export default Settings;
