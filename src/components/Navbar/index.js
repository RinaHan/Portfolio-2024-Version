import React, { useState } from 'react';
// import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // console.log('button: ', button);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  //   console.log('======');
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navWrapper'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            rinahan.com 😉
            {/* <i className='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/volunteers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Volunteers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/walk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Walk
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/greenLife'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                GreenLife
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/linkt'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Linkt
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;