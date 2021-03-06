import React from "react";
import styled from "styled-components";
function Detail({ pic }) {
  return (
    <Container>
      <Wrap>
        <img src={pic} />
      </Wrap>
    </Container>
  );
}

export default Detail;

const Container = styled.div``;

const Wrap = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 350px;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 250px;
  }

  @media screen and (max-width: 425px) {
    width: 380px;
    height: 500px;
    margin-bottom: 30px;
  }
`;
