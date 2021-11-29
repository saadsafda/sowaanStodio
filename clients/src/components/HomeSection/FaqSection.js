import React from "react";
import img from "../../assets/img/faq/fag-bg.png";
import FaqProps from "../../utils/FaqProps";

export default function FaqSection() {
  return (
    <div className="faq-area de-padding">
      <div className="faq-wpr grid-2">
        <div className="faq-left faq-padding-left">
          <div className="site-title">
            <span className="about-sub-title">Questions &amp; Answer</span>
            <h2
              data-splitting
              className="about-title mb-0 wow"
              data-wow-duration=".1s"
              data-wow-delay=".6s"
            >
              Need anything to ask check
              <br />
              Asked Question
            </h2>
          </div>
          <div className="accordion" id="accordionExample">
            <FaqProps
              classes2="accordion-collapse collapse"
              id="headingTwo"
              title="1. Think ahead &amp; boost your business?"
              classes="accordion-button collapsed"
              target="#collapseTwo"
              control="collapseTwo"
              id2="collapseTwo"
              ariaExpanded="false"
              lable="#headingTwo"
              pera=" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusitempor is exercitation ullamco laboris.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <FaqProps
              classes2="accordion-collapse collapse show"
              id="headingOne"
              ariaExpanded="true"
              title="2. How our experts consulter work?"
              classes="accordion-button"
              control="collapseOne"
              id2="collapseOne"
              target="#collapseOne"
              lable="#headingOne"
              pera=" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusitempor is exercitation ullamco laboris.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <FaqProps
              classes2="accordion-collapse collapse"
              id="headingThree"
              title="3. What is the best tips for growth your business?"
              classes="accordion-button collapsed"
              target="#collapseThree"
              control="collapseThree"
              id2="collapseThree"
              ariaExpanded="false"
              lable="#headingThree"
              pera=" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusitempor is exercitation ullamco laboris.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <FaqProps
              classes2="accordion-collapse collapse"
              id="heading4"
              title="4. How to improved your business?"
              classes="accordion-button collapsed"
              target="#collapse4"
              control="collapse4"
              id2="collapse4"
              ariaExpanded="false"
              lable="#heading4"
              pera=" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusitempor is exercitation ullamco laboris.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <FaqProps
              classes2="accordion-collapse collapse"
              id="heading5"
              title="4. How to improved your business?"
              classes="accordion-button collapsed"
              target="#collapse5"
              control="collapse5"
              id2="collapse5"
              ariaExpanded="false"
              lable="#heading5"
              pera=" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusitempor is exercitation ullamco laboris.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="faq-right">
          <div
            className="faq-pic wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <img src={img} alt="thumb" />
          </div>
        </div>
      </div>
    </div>
  );
}
