import React from "react";
import styled from "styled-components";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Navbar from "../components/Header";

function Home() {
  return (
    <Container>
      {/* <Navbar/> */}
      <HomeMain />
      <Cards />
    </Container>
  );
}

export default Home;

const Container = styled.div``