import React from "react";
import workimg1 from "../../assets/img/work/7.jpg";
import workimg2 from "../../assets/img/work/8.jpg";
import workimg3 from "../../assets/img/work/9.jpg";
import ButtonProps from "../../utils/ButtonProps";
import CaseStudyPropos from "../../utils/CaseStudyPropos";

export default function CaseStudySection() {
  return (
    <div className="case-area de-pt">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div
              className="site-title text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <span className="about-sub-title">Case Study</span>
              <h2 className="about-title mb-0">
                Recently Some Cases Done by Our
                <br />
                Agency Team
              </h2>
            </div>
          </div>
        </div>
        <div
          className="case-wpr grid-3 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s"
        >
          <CaseStudyPropos
            img={workimg1}
            pera=" Business / Business Analysis"
            title="Business Ananlysis &amp; Strategy"
          />
          <CaseStudyPropos
            img={workimg2}
            pera=" Business / Business Analysis"
            title="Business Ananlysis &amp; Strategy"
          />
          <CaseStudyPropos
            img={workimg3}
            pera=" Business / Business Analysis"
            title="Business Ananlysis &amp; Strategy"
          />
        </div>
        <div
          className="case-btn mt-60 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".4s"
        >
          <ButtonProps />
        </div>
      </div>
    </div>
  );
}
