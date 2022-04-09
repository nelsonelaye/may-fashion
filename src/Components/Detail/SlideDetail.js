import React from 'react'
import styled from "styled-components"

function SlideDetail({pic, head, text}) {
  return (
    <SlideCon>
        <ImageHold>
            <img src={pic} alt="shoe" />
        </ImageHold>
        <h3> {head}</h3>
        <span>{text}</span>
  </SlideCon>
  )
}

export default SlideDetail;


const SlideCon = styled.div`
  width: 320px;
  min-height: 400px;
  padding: 20px;
  background-color: green;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
 
  
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