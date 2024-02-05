import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from '../Button/Button'
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer-container'>
      <section className='footer-heading'></section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Projects</h2>
            <Link to='/volunteers'>
              Volunteers <i className='fab fa-php' />
            </Link>
            <Link to='/walk'>
              Walk <i className='fab fa-react' />
            </Link>
            <Link to='/greenlife'>
              GreenLife <i className='fab fa-react' />
            </Link>
            <Link to='/linkt'>
              Linkt <i className='fab fa-react' />
            </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <a href="https://www.linkedin.com/in/rina-han/">
              LinkedIn <i className='fab fa-linkedin' />
            </a>
            <a href='https://github.com/RinaHan'>
                GitHub <i className='fab fa-github' />
            </a>
            <a href='mailto:rinahan4146@gmail.com?subject=Hello Rina!&body='>
              rinahan4146@gmail.com
            </a>
          </div>
        </div>
      </div>
      <section className='link-to'>
        <div className='link-to-wrap'>
          {/* <div className='footer-logo'> */}
          <Link to='/' className='link-to-home'>
            rinahan.com 😉
            {/* <i className='fab fa-typo3' /> */}
          </Link>
          {/* </div> */}
          <small className='website-rights'>RINA © 2021</small>
          {/* <div className='social-icons'>
            <Link
              className='social-icon-link github'
              to='https://github.com/RinaHan'
              target='_blank'
              aria-label='github'
            >
              <i className='fab fa-github' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Footer
