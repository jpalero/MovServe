import React from "react";
import "../styles/Card.css";
import { useCart } from "react-use-cart";

const Card = (props) => {
  const { addItem } = useCart();

  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img src={props.img}></img>
        </div>
        <div className="card-container">
          <div className="desc-container">
            <h2>{props.title}</h2>
            <p>
              <b>Description: </b>
              {props.desc}
            </p>
            <p>
              <b>Genre: </b>
              {props.genre}
            </p>
            <p>
              <b>Casts: </b>
              {props.cast}
            </p>
          </div>
          <div className="button-container">
            <button className="reserveBtn" onClick={() => addItem(props.item)}>
              Reserve
            </button>
            <p>PHP: {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
