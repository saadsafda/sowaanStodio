import React from "react";
import work1 from "../../assets/img/work/1.png";
import work2 from "../../assets/img/work/2.png";
import work3 from "../../assets/img/work/3.png";
import work4 from "../../assets/img/work/4.png";
import work5 from "../../assets/img/work/5.png";
import work6 from "../../assets/img/work/6.png";
import ButtonProps from "../../utils/ButtonProps";

export default function WorkSection() {
  return (
    <div className="work-area de-pb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title text-center">
              <span className="about-sub-title">Protfolio</span>
              <h2
                data-splitting
                className="about-title mb-0 wow"
                data-wow-duration=".1s"
                data-wow-delay=".6s"
              >
                Recently done case study by our
                <br />
                inteligents team
              </h2>
            </div>
          </div>
        </div>
        <div className="work-wpr magnific-mix-gallery">
          <div className="work-grid-1 mb-30">
            <div className="work-pic work-pic-1">
              <img src={work1} alt="thumb" />
              <div className="work-overlay">
                <a href={work1} className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-2">
              <img src={work2} alt="thumb" />
              <div className="work-overlay">
                <a href={work2} className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-3">
              <img src={work3} alt="thumb" />
              <div className="work-overlay">
                <a href={work3} className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
          </div>
          <div className="work-grid-2 grid-3">
            <div className="work-pic work-pic-4">
              <img src={work4} alt="thumb" />
              <div className="work-overlay">
                <a href={work4} className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-5">
              <img src={work5} alt="thumb" />
              <div className="work-overlay">
                <a href={work5} className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-6">
              <img src={work6} alt="thumb" />
              <div className="work-overlay">
                <a href={work6} className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-btn text-center mt-70">
          <ButtonProps />
        </div>
      </div>
    </div>
  );
}
