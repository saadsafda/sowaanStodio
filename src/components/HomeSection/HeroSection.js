import React from "react";
import imgUrl from "../../assets/img/header/header-2.png";
import headImg from "../../assets/img/header/hdr-3.png";
import ButtonProps from "../../utils/ButtonProps";

const divStyle = {
  backgroundImage: "url(" + imgUrl + ")",
};

export default function HeroSection() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-sliderr">
        {/* owl Slider Begin */}
        <div className="hero-single home-2" style={divStyle}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="hero-content">
                  <span className="top-title">Business Consulting Agency</span>
                  <h2
                    data-splitting
                    classname="site-title-header wow"
                    data-wow-duration=".1s"
                    data-wow-delay=".4s"
                  >
                    web &amp; Mobile Development Services for Global Brands
                  </h2>

                  <p>
                    We build high-performance web &amp; mobile applications that
                    solve everyday problems.
                  </p>

                  <div className="hro-btn">
                    <ButtonProps link="/" text="Explore More " />
                    <div
                      className="how-we-work wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=ku6dEtynrRI"
                        className="item popup-youtube"
                      >
                        <i className="fas fa-play" />
                        <span className="how-txt">How we work</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="hero-right-pic">
                  <img src={headImg} alt="thumb" className="bounce-animate" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single Slider End */}
      </div>
    </div>
  );
}
