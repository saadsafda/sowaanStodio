import React from "react";
import imgUrl from "../../assets/img/bg/bg-2.png";

const Styleimg = {
  backgroundImage: "url(" + imgUrl + ")",
};

export default function Promo() {
  return (
    <div className="promo de-padding" style={Styleimg}>
      <div className="container">
        <div className="promo-wpr">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7">
              <div className="promo-left">
                <span className="about-sub-title">Contact Us</span>
                <h2
                  data-splitting
                  className="about-title mb-0 wow"
                  data-wow-duration=".1s"
                  data-wow-delay=".4s"
                >
                  If You Have any Projects or Task for Us. Please Contact Us
                </h2>
              </div>
            </div>
            <div className="col-xl-5">
              <div
                className="promo-right wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <a href="contact.html" className="theme-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
