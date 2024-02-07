import React from "react";
import styled from "styled-components";
import CardItem from "../../components/Cards/CardItem";
import "./HomePage.css";
import { Button } from "../../components/Button";

function HomePage() {
  return (
    <Container>
      <div className='h-container'>
        <section className='h-intro-section'>
          <div className='h-intro-bg'>test</div>
          {/* <img src='/images/walk2.png' alt='marvel' /> */}

          {/* <div className='h-section-title'>Intro</div> */}
          <div className='h-intro-text'>Rina Han</div>
          <div className='h-intro-sub-text'>Front-end Developer</div>

          {/* <div className='mainImgCont'>
            <img className='mainImg' src='images/tablet1.png' alt='' />
          </div> */}

          {/* <div className='mainText'> */}

          <div className='p-intro-btn-wrap'>
            <a href='https://www.linkedin.com/in/rina-han/' target='_blank' rel='noreferrer'>
              <Button className='ttes' buttonStyle='btn--outline' buttonSize='btn--medium'>
                Linkedin <i className='fab fa-linkedin' />
              </Button>
            </a>

            <a href='https://github.com/RinaHan' target='_blank' rel='noreferrer'>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>
                GitHub <i className='fab fa-github' />
              </Button>
            </a>
            <a
              href='mailto:rinahan4146@gmail.com?subject=Hello Rina!&body='
              target='_blank'
              rel='noreferrer'
            >
              <Button className='btnt' buttonStyle='btn--outline' buttonSize='btn--medium'>
                Email <i className='fab fa-google' />
              </Button>
            </a>
          </div>
          {/* </div> */}
        </section>

        {/* about me section */}
        <section className='h-about-section'>
          <div className='h-section-title'>About Me</div>
          {/* <div className="aboutCont">
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
        </div> */}
        </section>
      </div>

      {/* project cards section */}
      <div className='h-project-section'>
        <div className='h-section-title'>Projects</div>
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
