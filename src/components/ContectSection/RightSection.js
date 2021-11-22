import React from "react";

export default function RightSection() {
  return (
    <div
      className="contact-right wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".4s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationDelay: "0.4s",
        animationName: "fadeInUp",
      }}
    >
      <form
        className="contact-form"
        id="contact-form"
        action="https://themetum.com/ailng/php/contact.php"
        method="POST"
      >
        <div className="row g-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control input-style-2"
              placeholder="Marcos Zeletoyan"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="phone"
              className="form-control input-style-2"
              placeholder="+00- 1234- 56789"
            />
          </div>
          <div className="col-md-12">
            <input
              type="email"
              name="email"
              className="form-control input-style-2"
              placeholder="Email Address"
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control input-style-2"
              name="message"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="theme-btn mt-20">
              Send Message
            </button>
          </div>
          <div className="col-12 text-center">
            <p className="form-message" />
          </div>
        </div>
      </form>
    </div>
  );
}
