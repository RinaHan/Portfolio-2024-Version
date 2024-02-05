import React from "react";
import Project from "../components/Project";
import Footer from "../components/Footer";

function GreenLife() {
  return (
    <div>
      <Project
        src='images/mobile2.png'
        title='GreenLife'
        sort='Mobile App'
        sortIcon={<i class='fas fa-mobile-alt' />}
        exp1='Developed an application that tracks users’ daily carbon footprint as a team of 2'
        exp2='Modified Design and developed all UI components and pages using storybook and React'
        exp3='Collaborated on user research, personas, low and high fidelity and user testing'
        exp4=''
        tool1='React'
        toolIcon1={<i class='fab fa-react'></i>}
        tool2='Storybook'
        toolIcon2={<i class='fab fa-stripe-s'></i>}
        githubUrl='https://github.com/RinaHan/GreenLife-React'
        demo={<video src='/videos/greenlife.mp4' autoPlay loop muted />}
        projectSrc1='images/green1.png'
        projectSrc2='images/green2.png'
        // projectSrc3="images/linkt4.png"
      />
      <Footer />
    </div>
  );
}

export default GreenLife;
