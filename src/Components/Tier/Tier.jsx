import "./Tier.css";
import Union from "../../assets/Union.png";
import { useTypingEffect } from "../Typing/Typing";
import React from "react";

function Tier() {
  const textToAnimate =
    " We are a team of qualified professionals specializing in different areas of digital services. We work\nclosely with our clients to offer tailored solutions based on their specific needs, using the latest\ntechnologies and tools to deliver quality services that help clients achieve their business goals.";
  const interKeyStrokeDurationInMs = 100;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );
  return (
    <div className="rectangle-div1">
      <div className="have-any-troubles-container">
        <p className="have-any-troubles">HAVE ANY TROUBLES ?</p>
        <p className="our-hands-are">OUR HANDS ARE OPEN TO YOU</p>
      </div>
      <div className="we-are-a-container">
        <p className="we-are-a">{animatedText}</p>
      </div>
      <div className="parent-tier position-absolute">
        <div className="timeline">
          <div className="tier-1 left-container " style={{ left: "400px" }}>
            TIER <span className="num0">0</span>{" "}
          </div>

          <div className="about">
            <div className="position-absolute">
              <h2
                className="heading1  right-container "
                style={{ left: "930px", top: "130px" }}
              >
                SELF SERVICE UNIT
              </h2>
            </div>
            <p className="paragraph1 position-absolute">
              Anyone can use our chatbots, blogs or websites.
              <br />
              Also pick our social contact method such as twitter, LinkedIn,
              Facebook.
            </p>
            <img src={Union} className="vector-tier1 position-absolute" />
          </div>
          <div className="timeline ">
            <div className="tier-2 left-container " style={{ left: "400px" }}>
              TIER <span className="num1">1</span>
            </div>

            <div className="about">
              <div className="position-absolute">
                <h2
                  className="heading2  right-container "
                  style={{ top: "430px", left: "920px" }}
                >
                  CUSTOMER SUPPORT DIVISION
                </h2>
              </div>
              <p className="paragraph2 position-absolute">
                Our Customer Support Team addressea the issue and the user gets
                the response within 24-48 hours.
              </p>
              <img src={Union} className="vector-tier2 position-absolute" />
            </div>
          </div>

          <div className="timeline">
            <div className="tier-3 left-container" style={{ left: "400px" }}>
              TIER <span className="num2">2</span>
            </div>

            <div className="about">
              <div className="position-absolute">
                <h2
                  className="heading3 right-container "
                  style={{ top: "730px", left: "920px" }}
                >
                  TECHNICAL SUPPORT DIVISION
                </h2>
              </div>
              <p
                className="paragraph3  right-container position-absolute"
                style={{ top: "770px" }}
              >
                If the solution you received is not satisfactory,our Tier 2
                technical team will monitor it and you will be notified within 3
                to 5 bussiness days.
              </p>
              <img src={Union} className="vector-tier3 position-absolute" />
            </div>
          </div>
          <div className="timeline">
            <div className="tier-4 left-container" style={{ left: "400px" }}>
              TIER <span className="num3">3</span>
            </div>

            <div className="about">
              <div className="position-absolute">
                <h2
                  className="heading4 right-container "
                  style={{ top: "700px", left: "930px" }}
                >
                  NODAL SERVICE REGION
                </h2>
              </div>
              <p
                className="paragraph4  right-container position-absolute"
                style={{ top: "1060px" }}
              >
                Inquiries will be escalated to the Nodal Officer on Tier 3 if
                the issue is again not cleared and you will be notified within
                3to 5 bussiness days.
              </p>
              <img src={Union} className="vector-tier4 position-absolute" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tier;
