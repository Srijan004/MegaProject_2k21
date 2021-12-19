import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Bgi from "./images/HomePageBG.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <navbar className="navbar">
        <h1>
          <Link to="/"><i>PG Finder</i></Link>
        </h1>
        <Link to="./about"><h1>About Us</h1> </Link>
        <Link to="./services"><h1>Services</h1></Link>
        <h1>For PG Owners</h1>
        <h1>Contact Us</h1>
        <button>
          <strong>Login/SignUp</strong>{" "}
        </button>
      </navbar>

      <div className="searchPg">
        <div className="textPart">
          <div>
            Let's Find
            <br />
            Your Dream PG
            <br />
          </div>
          <input type="text"  id="" name="" placeholder="ENTER LANDMARK OR PIN" />
          <button> SEARCH   </button>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
