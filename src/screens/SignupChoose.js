import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./SignupChoose.css";

function SignupChoose() {
 const { name } = useParams();
 return (
  <div className="input-screen p-5 text-center choose-screen">
   <h1 className="mainheader py-2">What Challenges Would You Like?</h1>
   <h6 className="py-2">
    You can change you mind at any point, as often as you'd like
   </h6>
   <div className="center">
    <div class="radiogroup wd-flex-row-container row">
     <div class="wrapper p-1 col col-md-6 col-lg-4">
      <input
       class="state"
       type="radio"
       name="app"
       id="meditation"
       value="meditation"
      />
      <label class="label-choose" for="meditation">
       <div class="indicator">
        <h3 className="text-choose">Meditation</h3>
       </div>
      </label>
     </div>
     <div class="wrapper p-1 col-md-6 col-lg-4">
      <input class="state" type="radio" name="app" id="games" value="games" />
      <label class="label-choose" for="games">
       <div class="indicator">
        <h3 className="text-choose">Games</h3>
       </div>
      </label>
     </div>
     <div class="wrapper p-1 col col-md-12 col-lg-4">
      <input class="state" type="radio" name="app" id="yoga" value="yoga" />
      <label class="label-choose" for="yoga">
       <div class="indicator">
        <h3 className="text-choose">Yoga</h3>
       </div>
      </label>
     </div>
    </div>

    <Link to={`/signup3/${name}`}>
     <button class="btn btn-dark btnx-d px-4 m-4 btn-lg">Next</button>
    </Link>
   </div>
  </div>
 );
}
export default SignupChoose;
