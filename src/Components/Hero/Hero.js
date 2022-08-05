import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slide = () => {
  //     <TextDiv>
  //     <h1>Free Build The Community Your Fans Will Love</h1>
  //     <p>Create connections with your users as you engage in genuine discussion. Get Started For Free Grow Together Generate meaningful discussions with your audience and build a strong, loyal community.</p>
  //     <button>Get Started For Free</button>
  // </TextDiv>

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Container>
      <Carosel {...settings}>
        <Wrap>
          <Background>
            <img src="/images/bg11.jpg" alt="" />
          </Background>
        </Wrap>
        <Wrap>
          <Background>
            <img src="/images/bg10.jpg" alt="" />
          </Background>
        </Wrap>
        <Wrap>
          <Background>
            <img src="/images/bg1.jpg" alt="" />
          </Background>
        </Wrap>

        <Wrap>
          <Background>
            <img src="/images/bg7.jpg" alt="" />
          </Background>
        </Wrap>
        <Wrap>
          <Background>
            <img src="/images/bg8.jpg" alt="" />
          </Background>
        </Wrap>

        <Wrap>
          <Background>
            <img src="/images/bg3.jpg" alt="" />
          </Background>
        </Wrap>
      </Carosel>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media screen and (max-width: 425) {
    margin-bottom: 30px;
  }
`;
const Carosel = styled(Slider)`
  overflow: hidden;
  width: 100%;

  & > button {
    height: 100%;
    width: 5vw;
    z-index: 1;
    opacity: 0;

    :hover {
      opacity: 1;
    }
  }
`;
const Wrap = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 80vh;
  }
`;
const Background = styled.div`
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;

    height: 100%;
    object-fit: cover;
  }
`;
const TextDiv = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  p {
    width: 600px;
    font-size: 18px;
  }

  button {
    width: 200px;
    height: 50px;
    border-radius: 30px;
    outline: none;
    background-color: black;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    border: none;
    cursor: pointer;

    :hover {
      background-color: transparent;
      border: 1px solid #fff;
    }
  }
`;
