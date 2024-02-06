import React from "react";
import styled from "styled-components";
import HomeMain from "../../components/HomeMain";
import CardItem from "../../components/Cards/CardItem";
import "./HomePage.css";


function HomePage() {
  return (
    <Container>
      <HomeMain />
      <div className='cards'>
        <div className='projectTitle'>
          <div className='aboutTitle'>Projects</div>
        </div>
        {/* <h1>Check out these projects!</h1> */}
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/tablet1.png'
                text1='Volunteers'
                icon='icons/sql.png'
                text2='Search volunteer activity informations'
                text3='PHP, MySQL'
                label='Web App'
                path='/volunteers'
              />
              <CardItem
                src='images/mobile1.png'
                text1='Walk'
                icon='icons/reactnative.png'
                text2='Search dog walking volunteers for the community'
                text3='React-Native, Android Studio'
                label='Mobile App'
                path='/walk'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/mobile2.png'
                text1='GreenLife'
                icon='icons/react.png'
                text2='Tracks users’ daily carbon footprint'
                text3='Storybook, React'
                label='Mobile App'
                path='/greenlife'
              />
              <CardItem
                src='images/mobile3.png'
                text1='Linkt'
                icon='icons/react.png'
                text2='A dating App'
                text3='Storybook, React'
                label='Mobile App'
                path='/linkt'
              />
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;

const Container = styled.div``;
