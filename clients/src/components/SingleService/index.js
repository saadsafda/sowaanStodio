import React from "react";
import BreadcrumbProps from "../../utils/BreadcrumbProps";
import BlogContent from "./BlogContent";
import BlogCtergory from "./BlogCtergory";
import SubscribeSection from "../HomeSection/SubscribeSection";

export default function SingleServiceindex() {
  return (
    <>
      <main className="main">
        <BreadcrumbProps title="Service Details" urlpage="Service Details" />
        <div className="single-area de-padding">
          <div className="container">
            <div className="single-page-info">
              <BlogCtergory />
              <BlogContent />
            </div>
          </div>
        </div>
        <SubscribeSection />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
