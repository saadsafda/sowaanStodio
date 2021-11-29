import React from "react";
import Icon1 from "../../assets/img/icons/1.png";
import Icon2 from "../../assets/img/icons/2.png";
import Iconfeedback from "../../assets/img/icons/feedback.png";
import img from "../../assets/img/about/about-3.png";
import ButtonProps from "../../utils/ButtonProps";
import AboutProps from "../../utils/AboutProps";

export default function AgencySection() {
  return (
    <div id="resentwork" className="about-area de-pt">
      <div className="container">
        <div className="about-wpr as grid-2">
          <div className="about-right">
            <span className="about-sub-title">About Us</span>
            <h2
              data-splitting
              className="about-title wow"
              data-wow-duration=".1s"
              data-wow-delay=".4s"
            >
              Studio Sowaan - At a glance
            </h2>
            <p>
              We like to give creative and out of the box solution with the
              latest trends &amp; techniques resulting the awesome user
              experience.
            </p>

            <div className="about-fact grid-3">
              <AboutProps img={Icon1} rating="100" title="Project Completed" />
              <AboutProps img={Icon2} rating="30" title="Team Members" />
              <AboutProps
                img={Iconfeedback}
                rating="50"
                title="Happy Clients"
              />
            </div>
            <div
              className="about-btn mt-60 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <ButtonProps text="Get Started" />
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
