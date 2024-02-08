import React from "react";
import ProjectDesc from "../components/ProjectDesc";

function TicTacToe() {
  return (
    <div>
      <ProjectDesc
        src='images/tictactoe.png'
        title='Tic-Tac-Toe'
        subtitle='Side Project 2024'
        sort='Web App'
        sortIcon={<i className='fas fa-desktop' />}
        exp1='Simple tic tac toe service'
        exp2='Functional component using React Hooks'
        exp3='Single page application with the basic structure and functions of React'
        exp4='Deployed using Github'
        tool1='React'
        toolIcon1={<i className='fab fa-react'></i>}
        tool2='Node'
        toolIcon2={<i className='fab fa-node'></i>}
        // toolIcon2={<i className='fab fa-npm'></i>}
        githubUrl='https://github.com/RinaHan/tic-tac-toe'
        testUrl='https://rinahan.github.io/tic-tac-toe/'
        demo={<video src='/videos/tictactoe.mp4' autoPlay loop muted />}
        projectSrc1='images/tictactoe-code.png'
        // projectSrc2='images/green2.png'
        // projectSrc3="images/linkt4.png"
      />
    </div>
  );
}

export default TicTacToe;