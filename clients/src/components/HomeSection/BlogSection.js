import React from "react";
import ImgProps from "../../utils/ImgProps";
import Slider from "react-slick";
import blogimg1 from "../../assets/img/sowaanimg/1.png";
import blogimg2 from "../../assets/img/sowaanimg/2.png";
import blogimg3 from "../../assets/img/sowaanimg/3.png";
import blogimg4 from "../../assets/img/sowaanimg/4.png";
import blogimg5 from "../../assets/img/sowaanimg/5.png";
import blogimg6 from "../../assets/img/sowaanimg/6.png";
import blogimg7 from "../../assets/img/sowaanimg/7.png";
import blogimg8 from "../../assets/img/sowaanimg/8.png";
import blogimg9 from "../../assets/img/sowaanimg/9.png";
import blogimg11 from "../../assets/img/sowaanimg/11.png";
import blogimg12 from "../../assets/img/sowaanimg/12.png";
import blogimg13 from "../../assets/img/sowaanimg/13.png";
import blogimg14 from "../../assets/img/sowaanimg/14.png";
import blogimg15 from "../../assets/img/sowaanimg/15.png";
import blogimg16 from "../../assets/img/sowaanimg/16.png";
import blogimg17 from "../../assets/img/sowaanimg/ary.jpg";
import blogimg18 from "../../assets/img/sowaanimg/back.png";
import blogimg19 from "../../assets/img/sowaanimg/bma.png";
import blogimg20 from "../../assets/img/sowaanimg/Lal.png";
import blogimg21 from "../../assets/img/sowaanimg/king.png";
import blogimg22 from "../../assets/img/sowaanimg/pizzamax.png";
import blogimg23 from "../../assets/img/sowaanimg/pizzahut.png";
import blogimg24 from "../../assets/img/sowaanimg/sab.png";
import blogimg25 from "../../assets/img/sowaanimg/si.png";
import blogimg26 from "../../assets/img/sowaanimg/un.png";
import blogimg27 from "../../assets/img/sowaanimg/v.png";
import blogimg28 from "../../assets/img/sowaanimg/wa.png";
import blogimg29 from "../../assets/img/sowaanimg/Attock.jpg";
import blogimg30 from "../../assets/img/sowaanimg/pizzac.jpg";
import blogimg31 from "../../assets/img/sowaanimg/arysa.png";
import blogimg32 from "../../assets/img/sowaanimg/food.jpg";
import blogimg33 from "../../assets/img/sowaanimg/Dvago.png";
import blogimg34 from "../../assets/img/sowaanimg/cpizza.png";
import blogimg35 from "../../assets/img/sowaanimg/max.png";

export default function BlogSection() {
  var settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section
        id="clients"
        className="section section-lg bg-transparent text-center"
      >
        <div className="container">
          <div
            className="site-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <h2 style={{ marginBottom: "10px", paddingTop: "30px" }}>
              OUR CLIENTS
            </h2>
            <p>
              Check out the names of our clients, which are well-known companies
              in their industry.
              <br /> They were glad to part of our logo design services.
            </p>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-6 gallery">
            <Slider {...settings} style={{ width: "100vw" }}>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg1} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg2} />
              </div>
              <div className="p-d">
                <ImgProps
                  styles={{
                    padding: "20px",
                  }}
                  img={blogimg3}
                />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "20px" }} img={blogimg4} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg5} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg6} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg7} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg8} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "20px" }} img={blogimg9} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg11} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "20px" }} img={blogimg12} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg13} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg14} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ width: "100px" }} img={blogimg15} />
              </div>
              <div className="p-d">
                <ImgProps styles={{}} img={blogimg16} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "22px" }} img={blogimg17} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "16px" }} img={blogimg18} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "24px" }} img={blogimg19} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "30px" }} img={blogimg20} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={blogimg21} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "36px" }} img={blogimg22} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "12px" }} img={blogimg23} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "22px" }} img={blogimg24} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "22px" }} img={blogimg25} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "20px" }} img={blogimg26} />
              </div>
              <div className="p-d">
                <ImgProps styles={{}} img={blogimg27} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "22px" }} img={blogimg28} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "14px" }} img={blogimg29} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "4px" }} img={blogimg30} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ paddingTop: "10px" }} img={blogimg31} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={blogimg32} />
              </div>
              <div className="p-d">
                <ImgProps styles={{}} img={blogimg33} />
              </div>
              <div className="p-d">
                <ImgProps styles={{}} img={blogimg34} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={blogimg35} />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
