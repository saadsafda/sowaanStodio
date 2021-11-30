import React, { useState } from "react";
import imgUrl from "../../assets/img/header/header-2.png";
import headImg from "../../assets/img/sowaanimg/bgapp.png";
import ButtonProps from "../../utils/ButtonProps";
import DialogFormProps from "../../utils/DialogFormProps";

const divStyle = {
  backgroundImage: "url(" + imgUrl + ")",
};

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log("open", open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("close", open);
  };

  return (
    <>
      <div id="home" className="hero-section">
        <div className="hero-sliderr">
          {/* owl Slider Begin */}
          <div className="hero-single home-2" style={divStyle}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="hero-content">
                    <span className="top-title">
                      Business Consulting Agency
                    </span>
                    <h2
                      classname="site-title-header wow"
                      data-wow-duration=".1s"
                      data-wow-delay=".4s"
                    >
                      web &amp; Mobile Development Services for Global Brands
                    </h2>

                    <p>
                      We build high-performance web &amp; mobile applications
                      that solve everyday problems.
                    </p>

                    <div className="hro-btn">
                      <ButtonProps
                        onClick={handleClick}
                        text="Get Free Consultation "
                      />
                      {/* <div
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
                    </div> */}
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
      <DialogFormProps open={open} onClose={handleClose} />
    </>
  );
}
