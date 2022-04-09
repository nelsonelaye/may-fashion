import React from 'react'
import styled from "styled-components"
import Detail from "../Detail/Detail"

function Men() {
  return (
    <Container>
        <Hold>
            <h1>Men's Collection</h1>   
            <CardHold>
                <Detail
                pic="/images/men2.jpg"
                />

                <Detail
                    pic="/images/men3.jpg"
                />
                <Detail
                    pic="/images/men4.jpg"
                />
                <Detail
                    pic="/images/men5.jpg"
                />
            </CardHold>
            <button>Browse Collections</button>
        </Hold>        
        
    </Container>
  )
}

export default Men;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    
` 
const Hold = styled.div`
  
    width: 90%;

    button{
        margin-top: 30px;
        padding: 15px 40px;
        font-size: 20px;
        font-weight: 400px;
        border-radius: 50px;
        background-color: #fff;
        outline: none;
        border: 1px solid black;
        cursor: pointer;
    }

`

const CardHold = styled.div`
    display: flex;
  
    justify-content: space-around;
    align-items: center;
`
