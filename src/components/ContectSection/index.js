import React from "react";
import BreadcrumbProps from "../../utils/BreadcrumbProps";
import SubscribeSection from "../HomeSection/SubscribeSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Contectindex() {
  return (
    <main className="main">
      <BreadcrumbProps title="Contact Us" urlpage="Contact Us" />
      <div className="single-area de-padding">
        <div className="container">
          <div className="contact-page-info grid-2">
            <LeftSection />
            <RightSection />
          </div>
        </div>
      </div>
      <SubscribeSection />  
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
