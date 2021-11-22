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
          <div className="navbar navbar-expand-lg                 bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
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
                <span>
                  <i className="icofont-ui-call mr-2" />
                  Call us-(+00) 1234 678 77
                </span>
              </div>
              <button className="navbar-toggler toggler-spring">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-sm-end">
                <ul className="navbar-nav navbar-mobile ml-auto">
                  <li className="nav-item dropdown fadeup">
                    {/* <Link className="nav-link" to="#">
                      Home <i className="caret ti-plus" />
                    </Link>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="index-2.html">
                          Home version 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="index-3.html">
                          Home version 2
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown fadeup">
                    <a className="nav-link" href="/">
                      Pages <i className="caret ti-plus" />
                    </a>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/service">
                          {" "}
                          Service{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/service-single">
                          Service Single
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Our Projects
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Project Single
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          {" "}
                          Our Team{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="*">
                          {" "}
                          404{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown fadeup">
                    <Link className="nav-link" to="">
                      Blog <i className="caret ti-plus" />
                    </Link>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          {" "}
                          Blog{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contect">
                      Contact
                    </Link>
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
                  <Link className="nav-link" to="/">
                    Home <i className="caret ti-plus" />
                  </Link>
                  {/* <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="index-2.html">
                        Home version 1
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="index-3.html">
                        Home version 2
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item fadeup">
                  <a className="nav-link" href="/">
                    Pages <i className="caret ti-plus" />
                  </a>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        {" "}
                        Service{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service-single">
                        Service Single
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Our Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Project Single
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        {" "}
                        Our Team{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="*">
                        {" "}
                        404{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item fadeup">
                  <Link className="nav-link" to="">
                    Blog <i className="caret ti-plus" />
                  </Link>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        {" "}
                        Blog{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contect">
                    Contact
                  </Link>
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
