import React from "react";
import ImgProps from "../../utils/ImgProps";
import Slider from "react-slick";
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
import b17 from "../../assets/img/sowaanimg/17.png";
import b18 from "../../assets/img/sowaanimg/18.png";
import b19 from "../../assets/img/sowaanimg/19.png";
import b20 from "../../assets/img/sowaanimg/20.png";
import b21 from "../../assets/img/sowaanimg/21.png";
import b22 from "../../assets/img/sowaanimg/22.png";
import b23 from "../../assets/img/sowaanimg/23.png";
import b24 from "../../assets/img/sowaanimg/24.png";
import b25 from "../../assets/img/sowaanimg/25.png";
import b26 from "../../assets/img/sowaanimg/26.png";
import b27 from "../../assets/img/sowaanimg/27.png";
import b28 from "../../assets/img/sowaanimg/28.png";
import b29 from "../../assets/img/sowaanimg/29.png";
import b30 from "../../assets/img/sowaanimg/30.png";
import b31 from "../../assets/img/sowaanimg/31.png";
import b32 from "../../assets/img/sowaanimg/32.png";
import b33 from "../../assets/img/sowaanimg/33.png";
import b34 from "../../assets/img/sowaanimg/34.png";
import b35 from "../../assets/img/sowaanimg/35.png";
import b36 from "../../assets/img/sowaanimg/36.png";
import b37 from "../../assets/img/sowaanimg/37.png";
import b38 from "../../assets/img/sowaanimg/38.png";
import b39 from "../../assets/img/sowaanimg/39.png";
import b40 from "../../assets/img/sowaanimg/40.jpeg";
import b41 from "../../assets/img/sowaanimg/41.jpeg";
import b42 from "../../assets/img/sowaanimg/42.png";
import b43 from "../../assets/img/sowaanimg/43.png";
import b44 from "../../assets/img/sowaanimg/44.jpg";

export default function BlogSection() {
  var settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1600,
    autoplaySpeed: 100,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b17} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b18} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b19} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b20} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b21} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b22} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b23} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b24} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b25} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b26} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b27} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b28} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b29} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b30} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b31} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b32} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b33} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b34} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b35} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b36} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b37} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b38} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b39} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b40} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b41} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b42} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b43} />
              </div>
              <div className="p-d">
                <ImgProps styles={{ padding: "10px" }} img={b44} />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
