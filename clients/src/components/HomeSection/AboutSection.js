import React, { useState } from "react";
import Aboutimg from "../../assets/img/about/about-3.png";
import ButtonProps from "../../utils/ButtonProps";
import DialogFormProps from "../../utils/DialogFormProps";

export default function AboutSection() {
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
      <div className="about-2 de-padding" id="about">
        <div className="container">
          <div className="about-2-wpr grid-2">
            <div className="about-2-left">
              <div
                className="about-2-pic wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <img src={Aboutimg} alt="thumb" />
              </div>
            </div>
            <div
              className="about-2-right wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <span className="about-sub-title">Agency Features</span>
              <h2 className="about-title mb-50">
                A helping hand agency <br />
                for Business
              </h2>
              <p classname="mb-30">
                We are taking the scientific route to rapidly evolving
                industries across all platforms. As a trusted website &amp;
                mobile app design and development company, we adopt a modern
                approach to unified management and automation tools to remain
                relevant and effectively support business outcomes on the web.
              </p>

              <ul className="about-list mb-50">
                <li>
                  <i className="icofont-check-circled" />
                  Unlimited Revisions
                </li>
                <li>
                  <i className="icofont-check-circled" />
                  Fresh and Unique Designs
                </li>
                <li>
                  <i className="icofont-check-circled" />
                  Most Affordable Pricing
                </li>
                <li>
                  <i className="icofont-check-circled" />
                  Flawless Aesthetics and Bold Brand Identity
                </li>
              </ul>
              <ButtonProps onClick={handleClick} text="Get Started " />
            </div>
          </div>
        </div>
      </div>
      <DialogFormProps open={open} onClose={handleClose} />
    </>
  );
}
