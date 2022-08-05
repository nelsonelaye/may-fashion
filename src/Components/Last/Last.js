import React from "react";
import styled from "styled-components";

const Last = () => {
  return (
    <Container>
      <Hold>
        <Dark></Dark>

        <Text>
          <h2>Shop the Best Fashion Products from around the World.</h2>
          <p>
            Get classic wears, sleek bags and exclusive shoes at affordable
            price. Our products are available around the globe and we ship to
            anywhere in the world. Find your best-fit and make your order today.
          </p>
          <button>Shop Now</button>
        </Text>
      </Hold>
    </Container>
  );
};

export default Last;

const Container = styled.div`
  width: 100%;
  min-height: 95vh;
  height: 100%;
  // display: flex;
  display: none;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
  padding: 0 30px;
`;

const Hold = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 0 30px;

  width: 100%;
  height: 100%;
  background-image: url("/images/shop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    padding: 50px 30px;
  }
`;

const Dark = styled.div`
  position: absolute;
  border-radius: 10px;

  background-color: black;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.65;
`;

const Text = styled.div`
  // width: 600px;
  text-align: center;
  color: #fff;
  z-index: 4;

  h2 {
    font-size: 40px;
    // font-family: "Poppins", san-serif;
    font-weight: 700;
  }

  p {
    font-family: "Metrophobic", sans-serif;
    line-height: 25px;
  }
  button {
    margin-top: 30px;
    padding: 18px 40px;
    font-family: "Metrophobic", sans-serif;
    font-size: 23px;
    font-weight: 400px;
    border-radius: 10px;
    background-color: black;
    color: white;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.35s ease-in;

    :hover {
      background: none;
      border: 1px solid white;

      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      padding: 15px 30px;
      font-family: "Metrophobic", sans-serif;
      font-size: 18px;
    }
  }
`;
