import React from "react";
import styled from "styled-components";
// import {FaFacebook, FaInstagram, FaTwitter, FaMailchimp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Location>
            <TextIcon>
              <span>Location Icon</span>
              <span>Location Discription</span>
            </TextIcon>
          </Location>
          <IconDiv>
            <span>Facebook</span>
            <span>+</span>
            <span>Instagram</span>
            <span>+</span>
            <span>FaTwitter</span>
          </IconDiv>
        </Wrapper>
        <p>
          &copy; Built by{" "}
          <a href="https://github.com/nelsonelaye" style={{ color: "inherit" }}>
            Nelson Elaye
          </a>
          . All Rights Reserved. 2022
        </p>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #040714;

  p {
    color: #697c81;
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    height: 80px;
    p {
      font-size: 13px;
    }
  }
`;
const Wrapper = styled.div`
  width: 90%;
  // display: flex;
  display: none;
  align-items: center;
  justify-content: space-between;
`;
const Location = styled.div``;

const IconDiv = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextIcon = styled.div``;
