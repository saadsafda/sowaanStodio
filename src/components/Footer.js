import React from "react";
import footerins1 from "../assets/img/singlepost/ins-1.jpg";
import footerins2 from "../assets/img/singlepost/ins-2.jpg";
import footerins3 from "../assets/img/singlepost/ins-3.jpg";
import footerlogo from "../assets/img/logo/logo.png";

export default function Footer() {
  return (
    <footer className="footer-2">
      <div className="footer-widget">
        <div className="container">
          <div className="footer-widget-wrapper de-padding">
            <div className="row g-5">
              <div className="col-xl-4 col-sm-6 col-lg-6">
                <div className="footer-widget-box ab-us">
                  <div>
                    <img src={footerlogo} alt="thumb" />
                  </div>
                  <p className="mb-50">
                    Maboriosam in a nesciung egemagnaeli montant odiy.
                  </p>
                  <form className="sub-form">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="input-style-1 input-style-2"
                    />
                    <button type="submit" className="sub-btn btn-3 btn-5">
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
                      <a href="/">Tips &amp; Tricks</a>
                    </li>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Privecy Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="/">Portfolio</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-6">
                <div className="footer-widget-box">
                  <h4 className="footer-widget-title">Helpful Links</h4>
                  <ul className="adr">
                    <li>
                      Address: House 00, Road No : 01, Street address, ABC
                    </li>
                    <li>
                      Phone: <a href="/">+0 123-456-7890</a>
                    </li>
                    <li>
                      Email: <a href="/">info@example.com</a>
                    </li>
                  </ul>
                  <ul className="footer-social">
                    <li>
                      <a href="/">
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
                      <a href="/">
                        <i className="fab fa-youtube" />
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
            <p className="mb-0">© 2020 All Right Reserved, Ailng</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
