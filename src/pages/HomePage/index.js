import React from "react";
import styled from "styled-components";
import CardItem from "../../components/Cards/CardItem";
import "./HomePage.css";
import { Button } from "../../components/Button";


function HomePage() {
  return (
    <Container>
      <div className="container">
      <div className="main">
        <div className="mainImgCont">
          <img className="mainImg" src="images/tablet1.png" alt="" />
        </div>
        <div className="mainText">
          {/* <div className="blink">Site is updating(Mar.4)...</div> */}
          <div className="myname">Rina Han</div>
          <div className="projectInfo">Front-end Developer</div>
          <div className="btnCont">
          <a href="https://www.linkedin.com/in/rina-han/">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Linkedin <i className='fab fa-linkedin'/>
            </Button>
            </a>
            
            <a href="https://github.com/RinaHan">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              GitHub <i className='fab fa-github'/>
            </Button>
            </a>
            <a href="mailto:rinahan4146@gmail.com?subject=Hello Rina!&body=">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Email <i className='fab fa-google'/>
            </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <div className="aboutTitle">About Me</div>
        <div className="aboutCont">
          <div className="aboutImgCont">
            <img className="aboutImg" src="images/rina.jpeg" alt="" />
          </div>
          <hr />
          <ul className="aboutInfoCont">
            <ul>Hi, I’m Rina ✔︎</ul>
            <li>
              I’m a 2nd year BCIT student in Digital Design and Development
            </li>
            <li>I’m studying Front-end Development and UI/UX design</li>
            <li>My expected graduation date is May 2021</li>
            <li>My strength is React and React Native <i className='fab fa-react'/></li>
            <li>
              I’m volunteering as a Tech Communication Staff in Korean Developer
              & Designer Meetup in Vancouver
            </li>
          </ul>
        </div>
      </div>
    </div>
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
