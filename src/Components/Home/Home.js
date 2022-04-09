import React from 'react'
import styled from "styled-components"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Men from "../Men/Men"
import Women from "../Women/Women"
import Shoe from "../Shoe/Shoe"
import Bag from "../Bag/Bag"
import Last from "../Last/Last"
import Footer from "../Footer/Footer"

function Home() {
  return (
    <Hold>
        <Header/>
        <Hero/>
        <Men/>
        <Shoe/>
        <Women/>
        <Bag/>
        <Last/>
        <Footer/>
    </Hold>
  )
}

export default Home;

const Hold = styled.div`

`