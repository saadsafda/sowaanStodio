import React from "react";
import man1 from "../../assets/img/sowaanimg/man1.png";
import man2 from "../../assets/img/sowaanimg/man2.png";
import man3 from "../../assets/img/sowaanimg/man3.png";
import Slider from "react-slick";

export default function AboutFeedBack() {
  var settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };
  return (
    <div className="feedback-area de-padding">
      <div className="container">
        <div className="swiper-container feed-active">
          <div className="swiper-wrapper">
            <Slider {...settings} style={{ width: "100vw" }}>
              <div className="container">
                <div className="swiper-slide">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <div className="feedback-left">
                        <div className="feedback-pic text-center">
                          <img src={man1} alt="thumb" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="feedback-right">
                        <p classname="mb-30" style={{ fontSize: "16px" }}>
                          We have worked with Sowaan to get our website &amp;
                          apps developed. We enjoyed the great experience. They
                          have qualified off shore team which enable them to
                          provide best quality of work with affordable prices.
                        </p>

                        <div className="feedback-bio">
                          <h5>Sami Al Badawi</h5>
                          <span className="d-block mb-30">
                            Executive Manager, Open Software Information
                            Technology Company (OSIT)
                          </span>
                          <div className="review-rating mt-60 d-flex align-items-center">
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Swiper Slider*/}
              <div className="container">
                <div className="swiper-slide">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <div className="feedback-left">
                        <div className="feedback-pic text-center">
                          <img src={man2} alt="thumb" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="feedback-right">
                        <p className="mb-30" style={{ fontSize: "16px" }}>
                          We had been outsourcing our work to Sowaan. We always
                          had a great experience working with their teams. They
                          have really good tools, especially for project
                          management which gave us comfortability and timely
                          work delivery.
                        </p>
                        <div className="feedback-bio">
                          <h5>Nasir Bin Ahmed Al-Zahid</h5>
                          <span className="d-block">
                            General Manager, Tarabot
                          </span>
                          <div className="review-rating mt-60 d-flex align-items-center">
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Swiper Slider*/}
              <div className="container">
                <div className="swiper-slide">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <div className="feedback-left">
                        <div className="feedback-pic text-center">
                          <img
                            src={man3}
                            alt="thumb"
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="feedback-right">
                        <p className="mb-30" style={{ fontSize: "16px" }}>
                          It was nice working with Sowaan. They are technically
                          strong and fulfil their commitments. We got our
                          project delivered on time and as per our
                          understanding. We will give five-star rating to Sowaan
                          team, Bravo to the team Sowaan.
                        </p>
                        <div className="feedback-bio">
                          <h5>Abdulmajeed Al-Rashood</h5>
                          <span className="d-block">
                            Human Capital Manager, Saudi Water Tachnology
                            Compnany
                          </span>
                          <div className="review-rating mt-60 d-flex align-items-center">
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Swiper Slider*/}
            </Slider>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  );
}
