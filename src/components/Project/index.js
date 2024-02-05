import React from "react";
// import "../../App.css";
// import { Button } from "../Button";
import "./Project.css";
import { Button } from "../Button";
// import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div className='container'>
      <div className='projectMain'>
        <div className='projectImgCont'>
          <img src={props.src} alt='project' className='project_main_img' />
        </div>
        <div className='projectInfoCont'>
          <p className='name'>{props.title}</p>
          <ul className='projectDetail'>
            <li id='info'>
              {props.sort} {props.sortIcon}
            </li>
            <li>{props.exp1}</li>
            <li>{props.exp2}</li>
            <li>{props.exp3}</li>
            <li>{props.exp4}</li>
            <li id='projectTool'>
              {props.tool1} {props.toolIcon1}
            </li>
            <li id='projectTool'>
              {props.tool2} {props.toolIcon2}
            </li>
          </ul>
          <div className='btnCont'>
            <a href={props.githubUrl}>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>
                GitHub <i className='fab fa-github' />
              </Button>
            </a>
            <a>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>
                Test <i className='fas fa-play-circle' />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className='demoCont'>
        <div className='demoText'>Demo</div>
        {props.demo}
      </div>

      <div className='codeCont'>
        <div className='aboutTitle'>Code</div>
        <div className='aboutCont'>
          <div className='aboutImgCont'>
            <img src={props.projectSrc1} alt='' />
            <img src={props.projectSrc2} alt='' />
            <img src={props.projectSrc3} alt='' />
            {/* <div className='projectDemoCont'>
        <div className='demoText'>Demo</div>
        {props.projectDemo}
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
