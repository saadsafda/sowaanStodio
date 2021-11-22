import React from "react";
import imgbg from "../../assets/img/subscribe/bg.png";
import imgpng from "../../assets/img/subscribe/sub-right.png";

const divStyle = {
  backgroundImage: "url(" + imgbg + ")",
};

export default function SubscribeSection() {
  return (
    <div className="sub-area de-padding" style={divStyle}>
      <div className="container">
        <div className="sub-wpr grid-2">
          <div className="sub-left">
            <div className="site-title">
              <span className="about-sub-title wh">Newsletter</span>
              <h2
                data-splitting
                className="about-title wh mb-0 wow"
                data-wow-duration=".1s"
                data-wow-delay=".6s"
              >
                To get Our Weekly &amp; Monthly News. Subscribe Newsletter.
              </h2>
            </div>
            <form
              className="sub-form wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <input
                type="text"
                placeholder="Your e-mail Address"
                className="input-style-1"
              />
              <button type="submit" className="sub-btn hv btn-3">
                Subscribe
              </button>
            </form>
          </div>
          <div className="sub-right text-center">
            <img src={imgpng} alt="thumb" />
          </div>
        </div>
      </div>
    </div>
  );
}
