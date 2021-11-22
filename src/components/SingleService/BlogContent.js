import React from "react";
import blogerImg from "../../assets/img/singlepost/de-blog.jpg";

export default function BlogContent() {
  return (
    <div className="service-single">
      <div
        className="service-single-pic wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <img src={blogerImg} className="blog-single-pic" alt="thumb" />
      </div>
      <div
        className="service-single-text wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".6s"
      >
        <span className="su">Financial Planing</span>
        <h2 className="service-single-title mb-50">
          Financial Planing &amp; Financial Analysis
        </h2>
        <p className="mb-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ulabore et dolore maialiqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamclaboris nisi utaliquip
          ex ea commodo consequat. Duis airure dolor in reprehenderit in
          voluptate velit esse cillum doloreu fugiat nulla pariatur. Excepteur
          sint occaecat cupiproident, sunt in culpa qui officia deserunt molliet
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
          sivoluptatem accusantium ipsui doloremeue laudantium totam rem
          aeeriam.
        </p>
        <p className="mb-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ulabore et dolore maialiqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamclaboris nisi utaliquip
          ex ea commodo consequat. Duis airure dolor in reprehenderit in
          voluptate velit esse cillum doloreu fugiat nulla pariatur.
        </p>
        <h2 className="service-single-title mb-50">How to work this Service</h2>
        <p className="mb-50">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorbibendum auctor, nisi
          elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
          amet nibh vulputate cursus a sit accumsan ipsum velit. Nam nec tellus
          a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
          consequat auctor eu in Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
        <ul className="service-option">
          <li>
            <i className="icofont-long-arrow-right" />
            <div className="service-txt">
              <h5>Planning</h5>
              <p className="mb-0">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel veilit aconsequat ipsum consecteture.more be elite
                consecteture.
              </p>
            </div>
          </li>
          <li>
            <i className="icofont-long-arrow-right" />
            <div className="service-txt">
              <h5>Team Meeting</h5>
              <p className="mb-0">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel veilit aconsequat ipsum consecteture.more be elite
                consecteture.
              </p>
            </div>
          </li>
          <li>
            <i className="icofont-long-arrow-right" />
            <div className="service-txt">
              <h5>Finished </h5>
              <p className="mb-0">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel veilit aconsequat ipsum consecteture.more be elite
                consecteture.
              </p>
            </div>
          </li>
          <li>
            <i className="icofont-long-arrow-right" />
            <div className="service-txt">
              <h5>Planning</h5>
              <p className="mb-0">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel veilit aconsequat ipsum consecteture.more be elite
                consecteture.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
