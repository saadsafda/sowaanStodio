import React from "react";
import AboutSection from "../HomeSection/AboutSection";
import FaqSection from "../HomeSection/FaqSection";
import SubscribeSection from "../HomeSection/SubscribeSection";
import AboutFeatur from "./AboutFeatur";
import AboutFeedBack from "./AboutFeedBack";
import Breadcrumb from "./Breadcrumb";

export default function Aboutindex() {
  return (
    <main className="main">
      <Breadcrumb />
      <AboutSection />
      <AboutFeatur />
      <FaqSection />
      <AboutFeedBack />
      <SubscribeSection />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
