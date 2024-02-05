import React from "react";
// import "../../App.css";
// import { Button } from "../Button/Button";
// import "./Project";
// import { Link } from "react-router-dom";
import Project from "../components/Project";

function Volunteers(props) {
  return (
    <div className='container'>
      {/* <div className='project'> */}
        <Project
          src='images/tablet1.png'
          title='Volunteers'
          sort='Web App'
          sortIcon={<i className='fas fa-desktop' />}
          exp1='Developed volunteer’s web app'
          exp2='Created a secure login system to prevent SQL injection using sessions'
          exp3='Allowed logged-in users to manage stored data, and visually showed it'
          exp4=''
          tool1='PHP'
          toolIcon1={<i className='fab fa-php'></i>}
          tool2='MySQL'
          toolIcon2={<i className='fab fa-'></i>}
          githubUrl='https://github.com/RinaHan/Volunteer-Web-App-PHP-MySQL'
          demo={<video src='/videos/volunteers.mp4' autoPlay loop muted />}
          projectSrc1='images/volun1.png'
          projectSrc2='images/volun2.png'
          projectSrc3='images/volun3.png'
        />
      {/* </div> */}
    </div>
  );
}

export default Volunteers;
