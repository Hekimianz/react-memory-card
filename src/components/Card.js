import React from "react";
import "./Card.css";
export default function Card(props) {
  const str = props.data.name;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className="card--cont">
      <img className="card--img" src={props.data.sprites.front_default} />
      <h1 className="card--name">{str2}</h1>
    </div>
  );
}
