import React from "react";
import styled from "styled-components";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function Home() {
  return (
    <Container>
      <HomeMain />
      <Cards />
      <Footer /> 
    </Container>
  );
}

export default Home;

const Container = styled.div``