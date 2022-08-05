import React from "react";
import styled from "styled-components";
import Detail from "../Detail/Detail";

function Women() {
  return (
    <Container>
      <Hold>
        <h1>Women's Collection</h1>
        <CardHold>
          <Detail pic="/images/w4.jpg" />

          <Detail pic="/images/w6.jpg" />
          <Detail pic="/images/w2.jpg" />
          <Detail pic="/images/w7.jpg" />
        </CardHold>
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          <button>Browse Collections</button>
        </a>
      </Hold>
    </Container>
  );
}

export default Women;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
`;
const Hold = styled.div`
  width: 95%;

  h1 {
    // font-family: Poppins;
    margin-left: 5px;
  }

  button {
    margin-top: 30px;
    padding: 15px 40px;
    font-family: "Metrophobic", sans-serif;
    font-size: 20px;
    font-weight: 400px;
    border-radius: 50px;
    background-color: #fff;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.35s;

    :hover {
      background-color: black;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 20px;
    }

    button {
      padding: 10px 20px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 425px) {
    button {
      margin-top: 10px;
    }
  }
`;

const CardHold = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
