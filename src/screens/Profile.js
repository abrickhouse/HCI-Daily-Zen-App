import Nav from "../Nav";
import { useParams } from "react-router-dom";
function Profile() {
 const { name } = useParams();
 return (
  <div className="wd-flex-row-container">
   {" "}
   <Nav name={name} />
   <div className="mx-2">
    <h2>My Profile</h2>
    should be able to change between personal profile versus friend profile...
    <br />
    display challenges completed, friend count, join date, streak (static data)
    <br />
    display calendar of completed challenges
   </div>
  </div>
 );
}
export default Profile;
