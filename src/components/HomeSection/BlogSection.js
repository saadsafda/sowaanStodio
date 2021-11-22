import React from "react";
import blogimg1 from "../../assets/img/blog/1.jpg";
import blogimg2 from "../../assets/img/blog/3.jpg";
import blogimg3 from "../../assets/img/blog/2.jpg";
import BlogProps from "../../utils/BlogProps";

export default function BlogSection() {
  return (
    <div className="blog-area de-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div
              className="site-title text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <span className="about-sub-title">Blog</span>
              <h2 className="about-title mb-0">
                See our Latest &amp; Popular Tips &amp; Tricks
                <br />
                from our Experts
              </h2>
            </div>
          </div>
        </div>
        <div
          className="blog-wpr grid-3 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".4s"
        >
          <BlogProps
            img={blogimg1}
            title="How to profit quickly in online tranding help"
            name=" Philip Hobs"
            date=" 02feb,2021"
            linktext="Read More"
            link="/service"
          />
          <BlogProps
            img={blogimg2}
            title="Most profitable business case studies tricks"
            name=" Philip Hobs"
            date=" 02feb,2021"
            linktext="Read More"
            link="/service"
          />
          <BlogProps
            img={blogimg3}
            title="Financial Aduting &amp; Planning for Business Started"
            name=" Philip Hobs"
            date=" 02feb,2021"
            linktext="Read More"
            link="/service"
          />
        </div>
      </div>
    </div>
  );
}
