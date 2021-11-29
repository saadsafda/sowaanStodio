import React from "react";
import img from "../../assets/img/review/review-pic-2.jpg";

export default function FaqSection2() {
  return (
    <div className="faq-2-area">
      <div className="container">
        <div className="faq-2-wpr grid-2">
          <div className="faq-2-left">
            <span className="about-sub-title">Question &amp; Answer</span>
            <h2
              data-splitting
              className="about-title mb-60 wow"
              data-wow-duration=".1s"
              data-wow-delay=".4s"
            >
              If You need Any Other Info Check Our FAQ,s
            </h2>
            <p className="mb-50">
              Lorem ipsum dolor seat ameat dui too consecteture elite more
              occopassional works.A consulting agency are highly trying to them
              to their clients.
            </p>
            <div
              className="faq-2-pic wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <img src={img} alt="thumb" />
            </div>
          </div>
          <div
            className="faq-2-right wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    1. Think ahead &amp; boost your business?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusitempor is exercitation ullamco laboris
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    2. How our experts consulter work?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusitempor is exercitation ullamco laboris.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. What is the best tips for growth your business?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusitempor is exercitation ullamco laboris.Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    4. How to improved your business?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusitempor is exercitation ullamco laboris.Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    5. How to improved your business?
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusitempor is exercitation ullamco laboris.Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
