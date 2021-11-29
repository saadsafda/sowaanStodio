import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo.png";

export default function Header() {
  // const [scroll, setScroll] = useState(false);

  // const changeNavbarPositon = () => {
  //   if (window.scrollY >= 70) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // window.addEventListener("scroll", changeNavbarPositon);
  return (
    <>
      <header className="header">
        <div className="main-navigation">
          <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  src={logo}
                  className="logo-display"
                  style={{ width: "80%" }}
                  alt="thumb"
                />
                <img
                  src={logo}
                  className="logo-scrolled"
                  style={{ width: "80%" }}
                  alt="thumb"
                />
              </Link>
              <div className="ttt">
                <li className="nav-item">
                  <a
                    href="https://wa.me/923212897837"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp"
                  >
                    <i className="icofont-brand-whatsapp mr-2" /> - (+92) 321 289
                    7837
                  </a>
                </li>
              </div>
              <button className="navbar-toggler toggler-spring">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-sm-end">
                <ul className="navbar-nav navbar-mobile ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resentwork">
                      Resent Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#ourServ">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#clients">
                      Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bsnav-mobile">
            <div className="bsnav-mobile-overlay" />
            <div className="navbar">
              <ul className="navbar-nav navbar-mobile ml-auto">
                <li className="nav-item fadeup">
                  <a className="nav-link" href="#home">
                    Home <i className="caret ti-plus" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resentwork">
                    Resent Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ourServ">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#clients">
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="clearfix"></div>
    </>
  );
}
