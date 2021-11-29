import React from "react";
import imgUrl from "../../assets/img/bg/bg-1.png";

const bgStyle = {
  backgroundImage: "url(" + imgUrl + ")",
};

export default function HomeServices() {
  return (
    <div id="ourServ" className="service-area de-padding" style={bgStyle}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title text-center">
              <span className="about-sub-title">Our Services</span>
              <h2
                data-splitting
                className="about-title mb-0 wow"
                data-wow-duration=".1s"
                data-wow-delay=".4s"
              >
                We bring the extensive user experience to our clients.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
