import React from "react";
import Icon3 from "../../assets/img/icons/3.png";
import Icon4 from "../../assets/img/icons/4.png";
import Icon5 from "../../assets/img/icons/5.png";
import Icon6 from "../../assets/img/icons/6.png";
import ServiceProps from "../../utils/ServiceProps";

export default function FeatureSection2() {
  return (
    <div className="feature-service">
      <div className="container">
        <div className="feature-wpr grid-4">
          <ServiceProps
            img={Icon3}
            title="Logo Designing"
            pera="With perfect logo designs, we make characters for your brands
                internationally that talk louder than words. Get high-quality
                custom logo design services."
          />
          <ServiceProps
            img={Icon4}
            title="Mobile &amp; Web"
            pera=" We consider planning and coding the website design to
            flawlessness, for remarkably better &amp; memorable user experience."
          />
          <ServiceProps
            img={Icon5}
            title="Video Animation"
            pera="For the concept of content and the best video animation, we
            guarantee capable conveyance of your message to the audience."
          />
          <ServiceProps
            img={Icon6}
            title="Social Media"
            pera=" With short stories and daily developing channels on social
            media, we have the creative designers that put you on the top of
            the list."
          />
        </div>
      </div>
    </div>
  );
}
