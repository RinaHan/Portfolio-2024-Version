import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
              <div className="card__title">
              <div className="cards__item__text1">{props.text1}</div>
              <img src={props.icon} alt="card icon" className='card__icon' />
              </div>
              <p className="cards__item__text2">{props.text2}</p>
              <p className="cards__item__text3">{props.text3}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
