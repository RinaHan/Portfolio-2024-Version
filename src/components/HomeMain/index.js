import React from "react";
// import "../../App.css";
// import { Button } from "../Button/Button";
import "./HomeMain.css";
import { Button } from "../Button";
// import { Link } from "react-router-dom";

function HomeMain() {
  return (
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
  );
}

export default HomeMain;
