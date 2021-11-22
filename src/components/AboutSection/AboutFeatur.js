import React from "react";
import manIcon from "../../assets/img/icons/man.png";
import checkedIcon from "../../assets/img/icons/checked.png";
import ratingIcon from "../../assets/img/icons/rating.png";
import consultIcon from "../../assets/img/icons/consult.png";

export default function AboutFeatur() {
  return (
    <div className="feature-areag de-pt">
      <div className="container">
        <div className="feature-wpr feature-2 grid-2">
          <div className="feature-left">
            <span className="about-sub-title">Agency Features</span>
            <h2
              data-splitting
              className="about-title mb-50 wow"
              data-wow-duration=".1s"
              data-wow-delay=".4s"
            >
              Consulting firm focused <br /> clients happiness.
            </h2>
            <p className="mb-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, seieiu
              elitesi tempor is exercitation ullamco laboris. Lorem ipsum dolor
              seat ameat dui too consecteture elite.
            </p>
            <a href="/" className="theme-btn">
              Get Started <i className="icofont-long-arrow-right" />
            </a>
          </div>
          <div className="feature-right grid-2">
            <div
              className="feature-box wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="feature-icon">
                <img src={manIcon} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Great Team</h5>
                <p className="mb-0">
                  According to lorem ipsum dolor sit consecteture elite.
                </p>
              </div>
            </div>
            <div
              className="feature-box wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="feature-icon">
                <img src={checkedIcon} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Trusted Agency</h5>
                <p className="mb-0">
                  According to lorem ipsum dolor sit consecteture elite.
                </p>
              </div>
            </div>
            <div
              className="feature-box wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div className="feature-icon">
                <img src={ratingIcon} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Top Rated Agency</h5>
                <p className="mb-0">
                  According to lorem ipsum dolor sit consecteture elite.
                </p>
              </div>
            </div>
            <div
              className="feature-box wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="feature-icon">
                <img src={consultIcon} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Support Alltime</h5>
                <p className="mb-0">
                  According to lorem ipsum dolor sit consecteture elite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
