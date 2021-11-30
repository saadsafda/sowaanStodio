import React from "react";
import AboutFeedBack from "../components/AboutSection/AboutFeedBack";
import LeftSection from "../components/ContectSection/LeftSection";
import RightSection from "../components/ContectSection/RightSection";
import AboutSection from "../components/HomeSection/AboutSection";
import AgencySection from "../components/HomeSection/AgencySection";
import BlogSection from "../components/HomeSection/BlogSection";
import CaseStudySection from "../components/HomeSection/CaseStudySection";
import FeatureSection from "../components/HomeSection/FeatureSection";
import FeatureSection2 from "../components/HomeSection/FeatureSection2";
import HeroSection from "../components/HomeSection/HeroSection";
import HomeServices from "../components/HomeSection/HomeServices";
import Promo from "../components/HomeSection/Promo";
import SimpleReactLightbox from "simple-react-lightbox";

export default function Home() {
  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <HeroSection />
        {/* Feature Section */}
        <FeatureSection />
        {/* AboutSection */}
        <AboutSection />
        {/* Services Section */}
        <HomeServices />
        {/* Feature Section */}
        <FeatureSection2 />
        {/* FeedBack */}
        <AboutFeedBack />
        {/* <FaqSection2 /> */}
        {/* Promo */}
        <Promo />
        {/* Case Study Sectoin */}
        <SimpleReactLightbox>
          <CaseStudySection />
        </SimpleReactLightbox>
        {/* Agency */}
        <AgencySection />
        {/* Blog Section */}
        <BlogSection />
        {/* Contect from */}
        <br id="contact" />
        <br />
        <br />
        <br />
        <div
          className="single-area"
          style={{ backgroundColor: "aliceblue", paddingTop: "50px" }}
        >
          <div className="container">
            <div className="contact-page-info grid-2">
              <LeftSection />
              <RightSection />
            </div>
          </div>
        </div>
      </main>
      <div className="clearfix"></div>
    </>
  );
}
