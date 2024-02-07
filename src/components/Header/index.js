import React, { useState, useEffect } from "react";
// import { Button } from '../Button/Button';
import { Link } from "react-router-dom";
import "./Header.css";
import styled from "styled-components";

function Header() {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  // console.log("click: ", hamburgerClick);
  const [button, setButton] = useState(true);
  console.log("button: ", button);

  const handleClick = () => {
    setHamburgerClick(!hamburgerClick);
    // setHamburgerClick(!hamburgerClick);
  };
  const closeMobileMenu = () => {
    setHamburgerClick(false);
  };

  const showButton = () => {
    // if (window.innerWidth <= 560) {
      if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className='nav-container'>
      <Link to='/' className='logo' onClick={closeMobileMenu}>
        RinaHan
        {/* <i class='fab fa-typo3' /> */}
      </Link>
      <div className={hamburgerClick ? "menus active" : "menus"}>
        <span className="academic">ACADEMIC PROJECTS</span>
        <Link className='menu' to='/volunteers' onClick={closeMobileMenu}>
          Volunteers
        </Link>
        <Link className='menu' to='/walk' onClick={closeMobileMenu}>
          Walk
        </Link>
        <Link className='menu' to='/greenLife' onClick={closeMobileMenu}>
          GreenLife
        </Link>
        <Link className='menu' to='/linkt' onClick={closeMobileMenu}>
          Linkt
        </Link>
      </div>
      {/* hamburger icon */}
      <Section className='hamburger-icon' button={button} onClick={handleClick}>
        <i className={hamburgerClick ? "fas fa-times" : "fas fa-bars"} />
      </Section>
    </div>
  );
}

export default Header;

const Section = styled.div`
  ${(props) => props.button && `display: none`};
  /* background-color: pink; */
`;
