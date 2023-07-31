import "./Slider.css";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
function Slider() {
  return (
    <div className="rectangle-slider">
      <div className="we-lead-organizations-container">
        <p className="we-lead-organizations">
          <span className="we">WE </span>
          <span className="web">LEAD</span>
          <span> ORGANIZATIONS </span>
        </p>
        <p className="into-their-digital-future">
          <span>INTO THEIR DIGITAL </span>
          <span className="web">FUTURE</span>
          <span className="we">.</span>
        </p>
      </div>
      <div className="projects">PROJECTS</div>
      <div className="b">01/09</div>
      <img className="imagebg1" alt="" src={bg1} />
      <div className="position-absolute">
        <div className="iza-apparels ">IZA APPARELS</div>
      </div>
      <div className="case-study position-absolute">
        <div className="case-study-child">
          <div className="case-study">Case Study</div>
          <div className="case-study">WEBSITE DEVELOPMENT</div>
          <div className="case-study">CLOTHING</div>
        </div>
      </div>

      <img src={bg2} className="imagebg2" />
      <div className="position-absolute">
        <div className="gelie-shrsta">GELIE SHRSTA</div>
      </div>
      <div className="case-study position-absolute">
        <div className="case-study-child1">
          <div className="case-study">Case Study</div>
          <div className="case-study">BRAND IDENTITY</div>
          <div className="case-study">CLOTHING</div>
        </div>
      </div>
    </div>
  );
}
export default Slider;
