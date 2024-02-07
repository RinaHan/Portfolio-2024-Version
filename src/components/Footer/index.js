import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <Container>
      <Items>
        <h2>Contact Me</h2>
        <Item href='https://www.linkedin.com/in/rina-han/' target='_blank'>
          <span>LinkedIn</span> <Icon className='footer-icon' src='icons/linkedin.png' alt='icon' />
        </Item>
        <Item href='https://github.com/RinaHan' target='_blank'>
          <span>GitHub</span> <Icon className='footer-icon' src='icons/github.jpg' alt='icon' />
        </Item>
        <Item href='mailto:rinahan4146@gmail.com?subject=Hello Rina!&body='>
          <span>Email</span> <Icon className='footer-icon' src='icons/gmail.png' alt='icon' />
        </Item>
      </Items>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: rgb(243, 210, 215);
  left: 0;
  bottom: 0;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  top:80px;
`;
const Items = styled.div`
  background-color: #fff;
  width: 50%;
  height: 50%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  box-shadow: 10px 9px 8px -2px rgba(0,0,0,0.47);

`;
const Item = styled.a`
  color: #242424;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  & :hover {
    color: #fc5f5f;
    transition: 0.3s ease-out;
    font-size: 16.5px;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: auto;
  margin-left: 10px;
  /* & :hover {
    transform: scale(1.05);
  } */
`;
