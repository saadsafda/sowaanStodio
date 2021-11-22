import React from "react";
import BreadcrumbProps from "../../utils/BreadcrumbProps";
import SubscribeSection from "../HomeSection/SubscribeSection";
import ServiceCard from "./ServiceCard";

export default function Servicesindex() {
  return (
    <main className="main">
      <BreadcrumbProps title="Our Service" urlpage="Service" />
      <ServiceCard />
      <SubscribeSection />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
