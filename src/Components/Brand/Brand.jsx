import "./Brand.css";
import PieChart from "../PieChart/PieChart";
import group5 from "../../assets/group5.svg";
import group3 from "../../assets/group3.svg";
import group4 from "../../assets/group4.svg";

function Brand() {
  return (
    <div className="rectangle-div container-fluid">
      <div className="powering-your-brands-container">
        <p className="powering-your-brands">Powering Your Brand's Success </p>
        <p className="with-our-core">with Our Core Values</p>
      </div>
      <div className="this-is-the-container">
        <p className="this-is-the">
          This is the right place if you are in search for the best women
          outfits. Let’s redefine your styling{" "}
        </p>
        <p className="this-is-the">
          system with our huge store of trendy particulars. You can take online
          at us from the comfort of
        </p>
        <p className="this-is-the">
          {" "}
          your home and get your favourites delivered right to your doorstep
        </p>
      </div>

      <PieChart />
      <div className="imgvector position-absolute">
        <img className="vector-box " alt="" src={group3} />
        <div className="we-focus-on-container">
          <span>We focus on building elegant </span>
          <span className="experiences">experiences</span>
          <span>
            {" "}
            that meet your users where they are and get them to where they{" "}
          </span>
          <span className="experiences">want to be</span>
        </div>
      </div>
      <div className="imgvector position-absolute">
        <img className="vector-box1" alt="" src={group5} />
        <div className="we-believe-every-container">
          <span>We believe every </span>
          <b>design decision</b>
          <span>
            {" "}
            should be measured by its ability to help you reach actual{" "}
          </span>
          <b>business goals</b>
        </div>
      </div>
      <div className="imgvector position-absolute">
        <img className="vector-box2" alt="" src={group4} />
        <div className="technology-is-a-container">
          <span>
            Technology is a double-edged sword : we take into account your
            current{" "}
          </span>
          <b>capabilities</b>
          <span> and </span>
          <b>limitations</b>
          <span>
            {" "}
            to build practical designs that can be effectively and immediately
            implemented.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Brand;
