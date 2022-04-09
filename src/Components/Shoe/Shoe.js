import React, {useState, useEffect} from 'react'
import styled from'styled-components'
import Slider from "react-slick";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";



const Shoe = ()=> {

  

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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return(
   
      <Container>
      
        <Carousel {...settings}>
          <SlideCon>
            <ImageHold>
              <img src="/images/shoe1.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>
          <SlideCon>
            <ImageHold>
              <img src="/images/shoe2.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>
          <SlideCon>
            <ImageHold>
              <img src="/images/shoe3.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe4.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe5.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe6.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>
          <SlideCon>
            <ImageHold>
              <img src="/images/shoe7.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe8.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe11.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe12.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>


          <SlideCon>
            <ImageHold>
              <img src="/images/shoe13.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe14.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe15.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>

          <SlideCon>
            <ImageHold>
              <img src="/images/shoe16.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>
          <SlideCon>
            <ImageHold>
              <img src="/images/shoe17.jpg" alt="shoe" />
            </ImageHold>
            <h3> Classic Sneaker </h3>
            <span>High sole, 42' size, with sleek walk movement and free on the inside</span>
          </SlideCon>
        </Carousel>
      </Container>
  )
}

export default Shoe

const Carousel = styled(Slider)`
  overflow: hidden;
  width: 100%;

  & > button {
    height: 100%;
    width:8vw;
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
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:50px 0px;

`
const SlideCon = styled.div`
  width: 250px;
  min-height: 400px;
  padding: 20px 30px;
  font-family: 'Metrophobic', sans-serif;
  position: relative;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
 
  
`

const ImageHold = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

`

