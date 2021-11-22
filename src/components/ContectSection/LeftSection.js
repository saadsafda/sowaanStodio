import React from "react";

export default function LeftSection() {
  return (
    <div className="contact-left">
      <ul
        className="contact-list wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.5s",
          animationName: "fadeInUp",
        }}
      >
        <li>
          <h5 className="fz-18-5">Address:</h5>
          <span>House 00, Road No : 01, Street address, ABC, Canada</span>
        </li>
        <li>
          <h5 className="fz-18-5">Phone:</h5>
          <span>+0 123-456-7890, +00 123-456-789</span>
        </li>
        <li>
          <h5 className="fz-18-5">Email:</h5>
          <span>
            <a href="/">hello@example.com</a>
          </span>
        </li>
      </ul>
    </div>
  );
}
