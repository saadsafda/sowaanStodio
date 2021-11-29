import React from "react";
import AboutFeedBack from "../components/AboutSection/AboutFeedBack";
import LeftSection from "../components/ContectSection/LeftSection";
import RightSection from "../components/ContectSection/RightSection";
import AboutSection from "../components/HomeSection/AboutSection";
import AgencySection from "../components/HomeSection/AgencySection";
import BlogSection from "../components/HomeSection/BlogSection";
import CaseStudySection from "../components/HomeSection/CaseStudySection";
// import FaqSection from "../components/HomeSection/FaqSection";
// import FaqSection2 from "../components/HomeSection/FaqSection2";
import FeatureSection from "../components/HomeSection/FeatureSection";
import FeatureSection2 from "../components/HomeSection/FeatureSection2";
import HeroSection from "../components/HomeSection/HeroSection";
import HomeServices from "../components/HomeSection/HomeServices";
import Promo from "../components/HomeSection/Promo";
// import ReviewSection from "../components/HomeSection/ReviewSection";
// import SubscribeSection from "../components/HomeSection/SubscribeSection";
// import WeDoSection from "../components/HomeSection/WeDoSection";
// import WorkSection from "../components/HomeSection/WorkSection";

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
        <CaseStudySection />
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
        {/* <WeDoSection />
        <FaqSection />
        <WorkSection />
        <SubscribeSection />
        <ReviewSection /> */}
      </main>
      <div className="clearfix"></div>
    </>
  );
}
