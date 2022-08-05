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

const Container = styled.div`
  width: 280px;
  height: 500px;
  margin: 0 5px;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  // @media screen and (max-width: 1024px) {
  //   width: 200px;
  //   height: 350px;
  // }

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 250px;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 400px;
    margin: 10px 0;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
