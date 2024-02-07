import React from "react";
import ProjectDesc from "../components/ProjectDesc";

function DisneyPlus() {
  return (
    <div>
      <ProjectDesc
        src='images/disney-app.png'
        title='DisneyPlus'
        subtitle='2024'
        sort='Web App'
        sortIcon={<i className='fas fa-mobile-alt' />}

        exp1='Single page application using React Router Dom and API provided by The Movie DB'
        exp2='Close modal using custom hook'
        exp3='Authentication functionality using Firebase'
        exp4='Deployed using Firebase'

        tool1='React'
        toolIcon1={<i className='fab fa-react'></i>}

        tool2='Node'
        toolIcon2={<i className="fab fa-node"></i>}
        
        githubUrl='https://github.com/RinaHan/DisneyPlus'
        demo={<video src='/videos/disney-app.mp4' autoPlay loop muted />}
        projectSrc1='images/disney-page1.png'
        projectSrc2='images/disney-page2.png'
        projectSrc3="images/disney-page3.png"
      />
    </div>
  );
}

export default DisneyPlus;