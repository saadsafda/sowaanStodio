import React from "react";
import Slider from "react-slick";
import ButtonProps from "../../utils/ButtonProps";
import CaseStudyPropos from "../../utils/CaseStudyPropos";
import workimg1 from "../../assets/img/sowaanimg/logo1.jpg";
import workimg2 from "../../assets/img/sowaanimg/logo2.jpg";
import workimg3 from "../../assets/img/sowaanimg/logo3.jpg";
import workimg4 from "../../assets/img/sowaanimg/logo4.jpg";
import workimg5 from "../../assets/img/sowaanimg/logo5.jpg";
import workimg6 from "../../assets/img/sowaanimg/logo6.jpg";
import workimg7 from "../../assets/img/sowaanimg/logo7.jpg";
import workimg8 from "../../assets/img/sowaanimg/logo8.jpg";
import workimg9 from "../../assets/img/sowaanimg/logo9.jpg";
import workimg10 from "../../assets/img/sowaanimg/logo10.jpg";
import workimg11 from "../../assets/img/sowaanimg/logo11.jpg";
import workimg12 from "../../assets/img/sowaanimg/logo12.jpg";
import workimg13 from "../../assets/img/sowaanimg/logo13.jpg";
import workimg14 from "../../assets/img/sowaanimg/logo14.jpg";
import workimg15 from "../../assets/img/sowaanimg/logo15.jpg";
import web1 from "../../assets/img/sowaanimg/web1.jpg";
import web2 from "../../assets/img/sowaanimg/web2.jpg";
import web3 from "../../assets/img/sowaanimg/web3.jpg";
import web4 from "../../assets/img/sowaanimg/web4.jpg";
import web5 from "../../assets/img/sowaanimg/web5.jpg";
import web6 from "../../assets/img/sowaanimg/web6.jpg";
import web7 from "../../assets/img/sowaanimg/web7.jpg";
import web8 from "../../assets/img/sowaanimg/web8.jpg";
import web9 from "../../assets/img/sowaanimg/web9.jpg";

export default function CaseStudySection() {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          <Slider {...settings} style={{ width: "76vw" }}>
            <CaseStudyPropos img={workimg1} />
            <CaseStudyPropos img={workimg2} />
            <CaseStudyPropos img={workimg3} />
            <CaseStudyPropos img={workimg4} />
            <CaseStudyPropos img={workimg5} />
            <CaseStudyPropos img={workimg6} />
            <CaseStudyPropos img={workimg7} />
            <CaseStudyPropos img={workimg8} />
            <CaseStudyPropos img={workimg9} />
            <CaseStudyPropos img={workimg10} />
            <CaseStudyPropos img={workimg11} />
            <CaseStudyPropos img={workimg12} />
            <CaseStudyPropos img={workimg13} />
            <CaseStudyPropos img={workimg14} />
            <CaseStudyPropos img={workimg15} />
            <CaseStudyPropos img={web1} />
            <CaseStudyPropos img={web2} />
            <CaseStudyPropos img={web3} />
            <CaseStudyPropos img={web4} />
            <CaseStudyPropos img={web5} />
            <CaseStudyPropos img={web6} />
            <CaseStudyPropos img={web7} />
            <CaseStudyPropos img={web8} />
            <CaseStudyPropos img={web9} />
          </Slider>
        </div>
        <div
          className="case-btn mt-60 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".4s"
        >
          <ButtonProps text="Get Started" />
        </div>
      </div>
    </div>
  );
}
