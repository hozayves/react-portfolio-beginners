import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Muhoza yves</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, production the quality work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt={Github}></img>
          <img src={Linkedin} alt={Github} />
          <img src={Instagram} alt={Github} />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt={Vector1} />
        <img src={Vector2} alt={Vector2} />
        <img src={boy} alt={boy} />
        <img src={Glassesimoji} alt={boy} />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} text1="Best Designer" text2="Award" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
