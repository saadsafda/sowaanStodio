import React from "react";
import manIcon from "../../assets/img/icons/man.png";
import checkedIcon from "../../assets/img/icons/checked.png";
import ratingIcon from "../../assets/img/icons/rating.png";
import consultIcon from "../../assets/img/icons/consult.png";
import FeatureProps from "../../utils/FeatureProps";

export default function FeatureSection() {
  return (
    <div className="feature-areag de-pt">
      <div className="container">
        <div className="feature-wpr feature-2 grid-2">
          <div
            className="feature-left wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <span className="about-sub-title">Agency Features</span>
            <h2 className="about-title mb-50">
              Studio Sowaan - Innovation and Creativity
            </h2>
            <p className="mb-50">
              Studio Sowaan offers a variety of logo design, website design, and
              development services, from creating mobile, web development
              solutions and responsive website designs to building custom
              e-commerce and intranet experiences using the latest and proven
              web technologies. We don't just create pretty websites and write
              code, we provide strategically crafted solutions. All-around
              website development services including design, implementation,
              quality assurance, maintenance, support, and migration.
            </p>
            <a href="contact.html" className="theme-btn">
              Get Started <i className="icofont-long-arrow-right" />
            </a>
          </div>
          <div className="feature-right grid-2">
            <FeatureProps
              img={manIcon}
              title="Great Team"
              pera="We own a great team who are always open to facilities its clients by all mean. Thus our clients are 99.99% happy from us."
            />
            <FeatureProps
              img={checkedIcon}
              title="Design & User Experience"
              pera="We give you the freedom to implement your ideas and then create intuitive mobile apps that keep users engaged."
            />
            <FeatureProps
              img={ratingIcon}
              title="Cross-platform Development"
              pera="Reduce development costs and time to market by building applications that run on multiple platforms."
            />
            <FeatureProps
              img={consultIcon}
              title="Native app development"
              pera="For performance-centric apps like games and graphic-heavy applications, its always best to use native libraries."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
