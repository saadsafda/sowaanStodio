import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// css imports
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/animate.css";
import "./assets/css/bsnav.min.css";
import "./assets/css/flaticon-set.css";
import "./assets/css/slick.css";
import "./assets/css/themify-icons.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/splitting.css";
import "./assets/css/splitting-cells.css";
import "./assets/css/responsive.css";
import "./style.css";

// component imports
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
// import Home from "./Pages/Home";
const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <body className="demo-1" id="bdy">
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Router>
          <ScrollToTop />
          <div
            className="theme_all_wrap"
            data-magic-cursor=" "
            data-color="crimson"
          >
            <div id="main-wrapper">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <>
                      <Header />
                      <Home />
                      <Footer />
                    </>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <a href="#bdy" id="scrtop" className="smooth-menu">
                <i className="ti-arrow-up"></i>
              </a>
              <div className="mouse-cursor cursor-outer"></div>
              <div className="mouse-cursor cursor-inner"></div>
            </div>
          </div>
        </Router>
      </Suspense>
    </body>
  );
}

export default App;
