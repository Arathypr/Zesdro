import "./Footer.css";
import Groupdot from "../../assets/Groupdot.png";
import Union from "../../assets/Union.png";

function Footer() {
  return (
    <div className="rectangle-div3 container-fluid">
      <div className="position-relative">
        {" "}
        <img
          src={Groupdot}
          className=" dots1 position-absolute bottom-0 end-0"
        />
      </div>
      <div className="have-a-cryptic-container">
        <p className="have-a-cryptic-project-with-yo">
          <span>Have a </span>
          <span className="have-a">cryptic</span>
          <span> project with </span>
          <span className="have-a">you</span>
          <span> ?</span>
        </p>
        <p className="well-make-it-bright">
          <span>We’ll make it</span> <span className="have-a">bright</span>
        </p>
      </div>
      <div className="feel-free-to">
        Feel free to reach out if you want to collaborate with us, or simply
        have a chat.
      </div>
      <div class="d-flex flex-row mb-3 imagecontainer mt justify-content-evenly">
        <div class="p-2 logo">Zesdro_Logo</div>
        <div class="p-2">
          <img src={Union} alt="" className="img" />p
        </div>
      </div>
      <div class="d-flex flex-row mb-3 imagecontainer mt justify-content-evenly">
        <div class="p-2 logo">Zesdro.com</div>
        <div class="p-2 ">
          <img src={Union} alt="" className="img" />
        </div>
      </div>
      <div className="rectangle-div-footer container-fluid">
        <footer>
          <hr className="border border-white" />
          <div className="navbar">
            <div className="celozisall-rights-reserved">
              @CELOZIS.All Rights Reserved
            </div>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">twitter</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
