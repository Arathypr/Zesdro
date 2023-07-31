import "./Circle.css";

function Circle() {
  return (
    <div className="rectangle-circle">
      <div className="no-fuzz-no-container">
        <p className="no-fuzz-no">NO FUZZ, NO BULLSHIT</p>
        <p className="services-done-on">SERVICES DONE ON TRUST</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="big-circle">
              <div className="circle1 position-absolute">
                <p className="data1">
                  Digital <br />
                  Marketing
                </p>
              </div>
              <div className="circle2 position-absolute">
                <p className="data2 ">
                  User <br />
                  Experience <br />
                  Design
                </p>
              </div>
              <div className="circle3 position-absolute">
                <p className="data3">
                  Brand
                  <br />
                  Identity
                </p>
              </div>
              <div className="circle4 position-absolute">
                <p className="data4">
                  Website
                  <br />
                  Devlopment
                </p>
              </div>
              <div className="circle5 position-absolute">
                <p className="data5">
                  SEO-Search
                  <br />
                  Engine
                  <br />
                  Optimization
                </p>
              </div>
              <div className="circle6 position-absolute">
                <p className="data6">
                  Custom CMS
                  <br />& Wordpress
                </p>
              </div>
              <div className="circle7 position-absolute">
                <p className="data7">
                  Branding <br />
                  Design
                </p>
              </div>
              <div className="circle8 position-absolute">
                <p className="data8">
                  App <br />
                  Development
                  <br />
                  IOS & Android
                </p>
              </div>
              <div className="circle9 position-absolute">
                <p className="data9">
                  User Interface
                  <br />
                  Design
                </p>
              </div>
              <div className="circle10 position-absolute">
                <p className="data10">
                  Business
                  <br />
                  Strategy
                </p>
              </div>
            </div>
          </div>

          <div className="col button-col">
            <div className="button-container">
              <div className="d-flex flex-column  justify-content-end align-items-end btn-lg main-button col">
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-light mb-5 mt-5 custom-btn"
                  >
                    HEALTHCARE
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-light mb-5 custom-btn"
                  >
                    EGINEERING
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-light mb-5 custom-btn"
                  >
                    E-COMMERCE
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-light mb-5 custom-btn"
                  >
                    TRAVEL & HOSPITALITY
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-light mb-5 custom-btn"
                  >
                    DIGITAL MARKETING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Circle;
