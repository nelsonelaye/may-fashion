import React from "react";
import styled from "styled-components";
import Logo from "../../logo.svg";
import { FaSearch } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Dark></Dark>
        <Navigator>
          <span>Men</span>
          <span>Women</span>
          <span>Accessories</span>
        </Navigator>
        <LogoDiv>May</LogoDiv>
        <IconDiv>
          <span>
            <FaSearch color="#fff" size="25px" />
          </span>
          <span>
            <BsFillCartPlusFill color="#fff" size="25px" />
          </span>
          <span>
            <FiShoppingBag color="#fff" size="25px" />
          </span>
        </IconDiv>
      </Wrapper>
    </Container>
  );
};

//slick-carousel

export default Header;

const Container = styled.div`
  position: relative;
  /* background-color: red; */
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  font-family: "Metrophobic", sans-serif;
  @media screen and (max-width: 425px) {
    height: 70px;
  }
`;

const Dark = styled.div`
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -5;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;
const Navigator = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    color: #fff;
    padding: 20px;
    transition: all 0.35s ease-in;

    :hover {
      color: #a3a3a3;
    }
  }

  @media screen and (max-width: 1024px) {
    span {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LogoDiv = styled.div`
  font-size: 50px;
  font-weight: 400;
  font-family: "Playball", cursive;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
`;
const IconDiv = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    span {
      width: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
