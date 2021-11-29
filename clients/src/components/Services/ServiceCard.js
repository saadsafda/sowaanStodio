import React from "react";
import WeDoProps from "../../utils/WeDoProps";
import Icon3 from "../../assets/img/icons/3.png";
import Icon4 from "../../assets/img/icons/4.png";
import Icon5 from "../../assets/img/icons/5.png";
import Icon6 from "../../assets/img/icons/6.png";
import Icon7 from "../../assets/img/icons/7.png";
import Icon8 from "../../assets/img/icons/8.png";

export default function ServiceCard() {
  return (
    <div className="what-area what-page de-pb">
      <div className="container">
        <div className="what-wpr grid-3">
          <WeDoProps
            img={Icon3}
            title="Business Analysis"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon4}
            title="Financial Planning"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon5}
            title="Digital Marketing"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon6}
            title="Business Consulting"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon7}
            title="Creative Design"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
          <WeDoProps
            img={Icon8}
            title="Email Marketing"
            pera="According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite."
            href="Explore Service"
          />
        </div>
      </div>
    </div>
  );
}
