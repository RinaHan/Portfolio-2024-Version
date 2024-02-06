import React from "react";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Linkt() {
  return (
    <div>
      <Project
        src='images/mobile3.png'
        title='Linkt'
        sort='Mobile App'
        exp1='Created a dating Web App using Storybook and React as a team of 4'
        exp2='Developed User Settings, Recommended Match, Match Profile pages and assisted in Profile Set Up and Questionnaire pages'
        exp3='Collaborated on high fidelity, prototype, UX/UI design and user testing'
        exp4=''
        tool1='React'
        toolIcon1={<i className='fab fa-react'></i>}
        tool2='Storybook'
        // toolIcon2={<i className='fab fa-speakap'></i>}
        toolIcon2={<i className='fab fa-stripe-s'></i>}
        githubUrl='https://github.com/RinaHan/Link-Mobile-App-React'
        demo={<video src='/videos/linkt.mp4' autoPlay loop muted />}
        projectSrc1='images/linkt1.png'
        projectSrc2='images/linkt3.png'
        projectSrc3='images/linkt4.png'
        // projectDemo={<video src='/images/linkt2 record.mp4' autoPlay loop muted />}
      />
    </div>
  );
}

export default Linkt;
