import React from "react";
import styled from "styled-components";
import Detail from "../Detail/Detail";

function Men() {
  return (
    <Container>
      <Hold>
        <h1>Men's Collection</h1>
        <CardHold>
          <Detail pic="/images/men2.jpg" />

          <Detail pic="/images/men3.jpg" />
          <Detail pic="/images/men4.jpg" />
          <Detail pic="/images/men8.jpg" />
        </CardHold>
        <button>Browse Collections</button>
      </Hold>
    </Container>
  );
}

export default Men;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px 0px;
`;
const Hold = styled.div`
  width: 90%;

  h1 {
    font-family: "Rufina", serif;
    margin-left: 18px;
  }

  button {
    margin-top: 30px;
    padding: 15px 30px;
    font-size: 20px;
    font-weight: 400px;
    border-radius: 50px;
    background-color: #fff;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.35s;
    font-family: "Metrophobic", sans-serif;
    :hover {
      background-color: black;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 23px;
    }

    button {
      padding: 10px 30px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 425px) {
    button {
      margin-top: 0px;
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
