import React from 'react'
import styled from "styled-components"
import Detail from "../../Detail/Detail"

function Women() {
  return (
    <Container>
        <Hold>
            <h1>Women's Collection</h1>   
            <CardHold>
                <Detail
                pic="/images/ussama-azam-27xbM3bF9_s-unsplash.jpg"
                />

                <Detail
                    pic="/images/vladimir-yelizarov-l2SZ48MVw6E-unsplash.jpg"
                />
                <Detail
                    pic="/images/huseyin-kilic-4srS6_QGdIE-unsplash.jpg"
                />
                <Detail
                    pic="/images/miguel-bruna-ex1CRGFAftA-unsplash.jpg"
                />
            </CardHold>
            <button>Browse Collections</button>
        </Hold>        
        
    </Container>
  )
}

export default Women;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:50px;
    
` 
const Hold = styled.div`
    width: 100%;
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
