import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards(props) {
  return (
    <Link className='cards-cont' to={props.path}>
      <figure className='cards-img-wrap' data-category={props.label}>
        <img className='cards-img' src={props.src} alt='Travel' />
      </figure>

      <div className='cards-title-wrap'>
        <div className='cards-title'>{props.title}</div>
        <img className='cards-icon' src={props.icon} alt='card icon' />
      </div>

      <p className='cards-desc'>{props.desc}</p>
      <p className='cards-lang'>{props.lang}</p>
    </Link>
  );
}

export default Cards;
