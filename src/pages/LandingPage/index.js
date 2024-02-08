import React from "react";
import Cards from "../../components/Cards";
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
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
              Linkedin <i className='fab fa-linkedin' />
            </Button>
          </a>

          <a href='https://github.com/RinaHan' target='_blank' rel='noreferrer'>
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
              GitHub <i className='fab fa-github' />
            </Button>
          </a>
          <a
            href='mailto:rinahan4146@gmail.com?subject=Hello Rina!&body='
            target='_blank'
            rel='noreferrer'
          >
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
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
            <div className='h-section-title'>
              <i class='fad fa-ornament'></i>
              {` `}About me
            </div>
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
        <div className='h-section-title'>
          <i class='fad fa-dice' />
          {` `}Side Projects
        </div>
        <div className='h-sub-title'>2024</div>

        <div className='cards-wrap'>
          <Cards
            src='images/disney-app.png'
            title='Disney Plus'
            icon='icons/react.png'
            desc='Disney+ is the streaming home of Disney.'
            lang='React, Node'
            label='Web App'
            path='/disneyplus'
          />
          <Cards
            src='images/tictactoe.png'
            title='Tic-Tac-Toe'
            icon='icons/react.png'
            desc='A simple Tic-Tac-Toe game'
            lang='React, Node'
            label='Web App'
            path='/tictactoe'
          />
        </div>
        {/* <div className='cards-wrap'>
          <Cards
            src='images/mobile2.png'
            title='GreenLife'
            icon='icons/react.png'
            desc='Tracks users’ daily carbon footprint'
            lang='Storybook, React'
            label='Mobile App'
            path='/greenlife'
          />
          <Cards
            src='images/mobile3.png'
            title='Linkt'
            icon='icons/react.png'
            desc='A dating App'
            lang='Storybook, React'
            label='Mobile App'
            path='/linkt'
          />
        </div> */}
      </div>
      <div className='h-A-projects-section'>
        <div className='h-section-title'>
          <i class='fad fa-fire' />
          {` Academic Projects`}
        </div>
        <div className='h-sub-title'>2019~2021</div>

        <div className='cards-wrap'>
          <Cards
            src='images/tablet1.png'
            title='Volunteers'
            icon='icons/sql.jpeg'
            desc='Search volunteer activity informations'
            lang='PHP, MySQL'
            label='Web App'
            path='/volunteers'
          />
          <Cards
            src='images/mobile1.png'
            title='Walk'
            icon='icons/reactnative.png'
            desc='Search dog walking volunteers'
            lang='React-Native, Android Studio'
            label='Mobile App'
            path='/walk'
          />
        </div>
        <div className='cards-wrap'>
          <Cards
            src='images/mobile2.png'
            title='GreenLife'
            icon='icons/react.png'
            desc='Tracks users’ daily carbon footprint'
            lang='Storybook, React'
            label='Mobile App'
            path='/greenlife'
          />
          <Cards
            src='images/mobile3.png'
            title='Linkt'
            icon='icons/react.png'
            desc='A dating App'
            lang='Storybook, React'
            label='Mobile App'
            path='/linkt'
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
