import React from "react";
import ProjectDesc from "../components/ProjectDesc";

function Walk() {
  return (
    <div>
      <ProjectDesc
          src='images/mobile1.png'
          title='Walk'
          subtitle='Academic 2021'
          sort='Mobile App'
          sortIcon={<i className='fas fa-mobile-alt'></i>}
          exp1='Created a dog walking volunteer application for the community'
          exp2='Led the development process in a well-coordinated manner as a team of 3'
          exp3='Tested and debugged all UI components and pages'
          exp4='Collaborated on user personas, user task model, low and high fidelity'
          tool1='React-Native'
          toolIcon1={<i className='fab fa-react'></i>}
          tool2='Android Studio'
          toolIcon2={<i className='fab fa-android'></i>}
          // video='/videos/walk.mp4'
          githubUrl='https://github.com/RinaHan/Walk-Mobile-App-React-Native'
          demo={<video src='/videos/walk.mp4' autoPlay loop muted />}
          projectSrc1='images/walk1.png'
          projectSrc2='images/walk2.png'
          projectSrc3='images/walk3.png'
          // demo={<video src='/videos/walk.mp4' autoPlay loop muted />}
        />
    </div>
  );
}

export default Walk;
