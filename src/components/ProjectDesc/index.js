/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ProjectDesc.css";
import { Button } from "../Button";

function ProjectDesc(props) {
  return (
    <div className='p-container'>
      {/* -----description section */}
      <section className='p-desc-section'>
        <div className='p-desc-cont'>
        {/* leftside-image */}
        <div className='p-img-wrap'>
          <img src={props.src} alt='project' />
        </div>
        {/* rightside-details */}
        <div className='p-details-wrap'>
          <p className='p-title'>{props.title}</p>
          <ul className='p-details'>
          <li className='p-sub-title'>{props.subtitle}</li>
            <li id='p-bold-text'>
              {props.sort} {props.sortIcon}
            </li>
            <li id='p-bold-text'>
              {props.tool1} {props.toolIcon1}
            </li>
            <li id='p-bold-text'>
              {props.tool2} {props.toolIcon2}
            </li>
            <li>{props.exp1}</li>
            <li>{props.exp2}</li>
            <li>{props.exp3}</li>
            {/* <li>{props.exp4}</li> */}
            {/* {props.exp4.length >= 0 && <li>test</li>} */}
          </ul>

          {/* buttons */}
          <div className='p-btn-wrap'>
            <a href={props.githubUrl} target='_blank' rel="noreferrer" >
              <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--medium'>
                GitHub <i className='fab fa-github' />
              </Button>
            </a>
            {/* <a>
              <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--medium'>
                Test <i className='fas fa-play-circle' />
              </Button>
            </a> */}
          </div>
        </div>
        </div>
      </section>

      {/* -----demo section */}
      <section className='p-demo-section'>
        <div className='p-section-title'>Demo</div>
        <div className='p-demo-video'>{props.demo}</div>
      </section>

      {/* -----code section */}
      <section className='p-code-section'>
        <div className='p-section-title'>Code</div>
        <div className='p-code-img-wrap'>
          <img src={props.projectSrc1} alt='' />
          <img src={props.projectSrc2} alt='' />
          <img src={props.projectSrc3} alt='' />
        </div>
      </section>
    </div>
  );
}

export default ProjectDesc;
