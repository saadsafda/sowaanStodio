import React from "react";
import Icon3 from "../../assets/img/icons/3.png";
import Icon4 from "../../assets/img/icons/4.png";
import Icon5 from "../../assets/img/icons/5.png";
import WeDoProps from "../../utils/WeDoProps";

export default function WeDoSection() {
  return (
    <div className="what-area de-pb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title text-center">
              <span className="about-sub-title">What We Do</span>
              <h2
                data-splitting
                className="about-title mb-0 wow"
                data-wow-duration=".1s"
                data-wow-delay=".2s"
              >
                We Providing Some Special Services
                <br />
                To our Clients.
              </h2>
            </div>
          </div>
        </div>
        <div className="what-wpr grid-3">
          <WeDoProps
            img={Icon3}
            title="Business Analysis"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon4}
            title="Financial Planning"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon5}
            title="Digital Marketing"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
        </div>
        <div className="what-footer mt-60">
          <h5
            className="mb-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            If you have any project or task for us Please{" "}
            <a href="contact.html">Contact Us</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
