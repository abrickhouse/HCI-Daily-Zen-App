import Nav from "../Nav";
import { useParams } from "react-router-dom";

function Community() {
 const { name } = useParams();
 return (
  <div className="wd-flex-row-container">
   {" "}
   <Nav name={name} />
   <div className="mx-2">
    <h2>My Community</h2>a couple static examples of community posts (should be
    able to click on them as in figma)
    <br />
    ability to search for freinds?
   </div>
  </div>
 );
}
export default Community;
