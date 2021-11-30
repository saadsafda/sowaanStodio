import React from "react";

export default function LeftSection() {
  return (
    <div className="contact-left">
      <h2>Have Any Questions?</h2>
      <span style={{ fontSize: "16px" }}>
        Your email address will not be published. We promise not to spam!
      </span>
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
        <br />
        <li>
          <h5 className="fz-18-5">Karachi, Pakistan</h5>
          <span style={{ fontSize: "16px" }}>
            1/6-P, PECHS, Block 6, Shahra-e-Faisal, Karachi Pakistan
          </span>
        </li>
        <li>
          <h5 className="fz-18-5">Riyadh, KSA</h5>
          <span style={{ fontSize: "16px" }}>
            Al Mousa Office Buildings, Tower # 4, Floor # 2, Office No. 425
            Riyadh, KSA
          </span>
        </li>
        <li>
          <h5 className="fz-18-5">Dubai, UAE</h5>
          <span style={{ fontSize: "16px" }}>
            The Iridium Building, Suite # 17, Umm Suqeim Road, Al Barsha P.O Box
            391186 Dubai, UAE
          </span>
        </li>
        <li>
          <h5 className="fz-18-5">England, UK</h5>
          <span style={{ fontSize: "16px" }}>
            146 Sneinton Dale Nottingham, England NG2 4HJ
          </span>
        </li>
      </ul>
    </div>
  );
}
