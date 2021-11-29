import React, { useState } from "react";
import imgUrl from "../../assets/img/bg/bg-2.png";
import ButtonProps from "../../utils/ButtonProps";
import DialogFormProps from "../../utils/DialogFormProps";

const Styleimg = {
  backgroundImage: "url(" + imgUrl + ")",
};

export default function Promo() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log("open", open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("close", open);
  };
  return (
    <>
      <div
        className="promo"
        style={Styleimg}
        // style={{  color: "grey" }}
      >
        <div className="container" style={{ padding: "50px" }}>
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div
                className="site-title text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                <h2 className="about-title mb-0">Out of the Box Creativty</h2>
                <p className="mb-40" style={{ fontSize: "16px" }}>
                  We offer you out of the box creative solution that takes your
                  brand on the top of the market and guarantee a place in the
                  spotlight. No matter what kind of industry, our particular
                  plans will leave your intended targeted audience fascinated
                  and amazed. Our aim is to work in a domain where originality
                  and fulfillment come first, in what we earn!
                </p>
                <ButtonProps onClick={handleClick} text="Get Started " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogFormProps open={open} onClose={handleClose} />
    </>
  );
}
