import React from "react";

function Card(props) {
  let type;
  if (props.openSpots == 0) {
    type = "SOLD OUT";
  } else {
    type = "ONLINE";
  }

  return (
    <div className="card">
      <img className="cardImg" src={`./assets/${props.coverImg}`} />
      <div className="cardInfo">
        <div className="cardType">{type}</div>
        <img className="cardStart" src="./assets/Star1.png" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="gray"> {props.stats.reviewCount} • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p class="cardTilte">{props.title}</p>
      <p>
        {" "}
        <span className="bold">From ${props.price} </span> / person
      </p>
    </div>
  );
}

export default Card;
