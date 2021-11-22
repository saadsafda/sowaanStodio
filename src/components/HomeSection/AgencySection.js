import React from "react";
import Icon1 from "../../assets/img/icons/1.png";
import Icon2 from "../../assets/img/icons/2.png";
import Iconfeedback from "../../assets/img/icons/feedback.png";
import img from "../../assets/img/about/about-3.png";
import ButtonProps from "../../utils/ButtonProps";
import AboutProps from "../../utils/AboutProps";

export default function AgencySection() {
  return (
    <div className="about-area de-pt">
      <div className="container">
        <div className="about-wpr as grid-2">
          <div className="about-right">
            <span className="about-sub-title">About Agency</span>
            <h2
              data-splitting
              className="about-title wow"
              data-wow-duration=".1s"
              data-wow-delay=".4s"
            >
              A helping hand agency <br />
              for Business
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              seieiusmoed dui too consecteture elite more.According to ipsum
              dolor seat ameat consecteture elite.
            </p>
            <div className="about-fact grid-3">
              <AboutProps img={Icon1} rating="2382" title="Project Completed" />
              <AboutProps img={Icon2} rating="1382" title="Team Members" />
              <AboutProps
                img={Iconfeedback}
                rating="2382"
                title="Happy Clients"
              />
            </div>
            <div
              className="about-btn mt-60 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <ButtonProps />
            </div>
          </div>
          <div className="about-left">
            <div
              className="about-img wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <img src={img} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
