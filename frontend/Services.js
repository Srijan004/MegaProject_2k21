import authCB from "./images/authCB.png";
import locationCB from "./images/locationCB.png";
import chatCB from "./images/chatCB.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <div className="mainServices">
        <div className="blankServices"></div>

        <div className="mainMS">
          <div className="headAndNav">
            <div className="MShead">
              <h1 className="mainMSH">It's so easy</h1>
              <br />
              <p className="mainMSC">
                This website has many features that can make your PG search as
                well as selling simpler and easier. We know how important a safe
                home is to you at both ends of the deal and that is a promise we
                make.
              </p>
            </div>

            <div className="msNav">
              <Link to= "/"> <p>Home</p></Link>
              <br />
              <Link to="/about"><p>About Us</p></Link>    
              <br />
              <Link to="/"><p>Login/SignUp</p></Link>
              <br />
              <Link to="/"><p>Contacts</p></Link>
            </div>
          </div>

          <div className="cardArea">
            <div className="feature">
              <div className="featureIcon">
                <img src={locationCB} />
              </div>

              <h3 className="featureHeading">Search Using Maps</h3>

              <p>
                Through the search system of this website you can define the
                area near the landmark on the map inside of which you want your
                PG.
              </p>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <img src={chatCB} height={92} className="chatICON" />
              </div>

              <h3 className="featureHeading">Chat System</h3>

              <p>
                You can chat with the owner of the pg to enquire about all your
                doubts regarding the place in an encryped chat system.
              </p>
            </div>
            <div className="feature">
              {" "}
              <div className="featureIcon">
                <img src={authCB} />
              </div>
              <h3 className="featureHeading">Google Authentication</h3>
              <p>
                Verify your identity with the help of google authentication
                which will help you with a better experience on the website.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rightServices"></div>
    </div>
  );
};

export default Services;
