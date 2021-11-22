import React from "react";
import BlogCtergoryProps from "../../utils/BlogCtergoryProps";

export default function BlogCtergory() {
  return (
    <>
      <aside
        className="sidebar wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".5s"
      >
        {/*Categories*/}
        <div className="sidebar-widget cate">
          <h4 className="widget-title">Case Category</h4>
          <ul>
            <BlogCtergoryProps
              title="Business Planing &amp; Consulting"
              num="09"
            />
            <BlogCtergoryProps title="Financial Planing" num="12" />
            <BlogCtergoryProps
              title="Digital &amp; Social Marketing"
              num="06"
            />
            <BlogCtergoryProps title="Web &amp; Graphic Design" num="13" />
            <BlogCtergoryProps title="Consulting" num="11" />
            <BlogCtergoryProps title="Startup Business Help" num="03" />
          </ul>
        </div>
      </aside>
    </>
  );
}
