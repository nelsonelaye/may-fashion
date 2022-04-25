import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Bag = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Carousel {...settings}>
        <SlideCon>
          <ImageHold>
            <img src="/images/bag1.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>
        <SlideCon>
          <ImageHold>
            <img src="/images/bag2.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>
        <SlideCon>
          <ImageHold>
            <img src="/images/bag3.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag4.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag5.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag6.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>
        <SlideCon>
          <ImageHold>
            <img src="/images/bag7.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag8.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag9.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag10.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag11.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag12.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag13.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag14.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag15.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag16.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>

        <SlideCon>
          <ImageHold>
            <img src="/images/bag17.jpg" alt="shoe" />
          </ImageHold>
          <h3> Sleek Clutch </h3>
          <span>
            Luxurious, fashionable hand bags for everyday outing and business.
          </span>
        </SlideCon>
      </Carousel>
    </Container>
  );
};

export default Bag;

const Carousel = styled(Slider)`
  overflow: hidden;
  width: 100%;

  & > button {
    height: 100%;
    width: 8vw;
    color: #fff;
    z-index: 10;
  }

  .slick-prev:before {
    font-size: 25px;
    padding: 15px;
    background-color: black;
    border-radius: 5px;
  }

  .slick-next:before {
    font-size: 25px;
    padding: 15px;
    background-color: black;
    border-radius: 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
`;
const SlideCon = styled.div`
  width: 250px;
  min-height: 300px;
  padding: 20px 30px;
  font-family: "Metrophobic", sans-serif;
  position: relative;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 16px;
    }
    span {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 425px) {
    width: 100px;
  }
`;

const ImageHold = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    height: 190px;
  }
`;
