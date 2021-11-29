import React from "react";
import footerins1 from "../assets/img/singlepost/ins-1.jpg";
import footerins2 from "../assets/img/singlepost/ins-2.jpg";
import footerins3 from "../assets/img/singlepost/ins-3.jpg";
import footerlogo from "../assets/img/sowaanimg/logo2.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-2">
        <div className="footer-widget">
          <div className="container">
            <div
              className="footer-widget-wrapper"
              style={{ padding: "30px", paddingBottom: "50px" }}
            >
              <div className="row g-5">
                <div className="col-xl-4 col-sm-6 col-lg-6">
                  <div className="footer-widget-box ab-us">
                    <div>
                      <img
                        src={footerlogo}
                        alt="thumb"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <br />
                    <p
                      className="mb-50"
                      style={{ marginTop: "-30px", fontSize: "16px" }}
                    >
                      Your Technology Partner for Software Innovation and
                      Market-leading Solutions.
                    </p>
                    <form className="sub-form">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="input-style-1 input-style-2"
                      />
                      <button
                        type="submit"
                        className="sub-btn btn-3 btn-5"
                        style={{ height: "64px" }}
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-lg-6">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Quick Links</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="#about">Tips &amp; Tricks</a>
                      </li>
                      <li>
                        <a href="#ourServ">Our Services</a>
                      </li>
                      <li>
                        <a href="#clients">Our Clients</a>
                      </li>
                      <li>
                        <a href="#team">Terms &amp; Condition</a>
                      </li>
                      {/* <li>
                        <a href="/">Portfolio</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-6">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Our HQ</h4>
                    <ul className="adr" style={{ fontSize: "16px" }}>
                      <li>
                        Address: 1/6-P, PECHS, Block 6, Shahra-e-Faisal, Karachi
                        Pakistan
                      </li>
                      <li>
                        Phone: <a href="/">+92 (301) 183 2653</a>
                      </li>
                      <li>
                        Email: <a href="/">support@sowaan.com</a>
                      </li>
                    </ul>
                    <ul className="footer-social">
                      <li>
                        <a href="https://www.facebook.com/SowaanTourism">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/sowaan/">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-6">
                  <div className="footer-widget-box footer-gallery">
                    <h4 className="footer-widget-title">Instagram</h4>
                    <div className="foter-img grid-2">
                      <a href="/">
                        <img src={footerins1} alt="thumb" />
                      </a>
                      <a href="/">
                        <img src={footerins2} alt="thumb" />
                      </a>
                      <a href="/">
                        <img src={footerins3} alt="thumb" />
                      </a>
                      <a href="/">
                        <img src={footerins1} alt="thumb" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright text-center">
              <p className="mb-0">© 2021 Sowaan. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
