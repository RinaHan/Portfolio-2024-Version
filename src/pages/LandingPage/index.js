import React from "react";
import CardItem from "../../components/Cards/CardItem";
import { Button } from "../../components/Button";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className='h-container'>
      {/* intro section */}
      <section className='h-intro-section'>
        <div className='h-intro-text'>Rina Han</div>
        <div className='h-intro-sub-text'>Front-end Developer</div>

        <div className='h-intro-btn-wrap'>
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
      </section>

      {/* about section */}
      <section className='h-about-section'>
        <div className='h-about-cont'>
          <div className='h-about-img'>
            <img src='images/rina.jpg' alt='rinaphoto' />
          </div>
          <div className='h-about-text'>
            <div className='h-section-title'>About</div>
            <p>Hello, I’m Rina</p>
            <p>
              I have a constant curiosity and an enthusiasm for learning. Believing in myself
              without setting limits also allows me to continue developing my skills and goals. I
              want to use my development skills to assist companies in providing better services to
              the community.
            </p>
          </div>
        </div>
      </section>

      {/* projects section */}
      <div className='h-projects-section'>
        <div className='h-section-title'>Projects</div>

        <ul className='cards-items'>
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
  );
}

export default LandingPage;
