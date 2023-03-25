import React from "react";
import "./RoundOver.css";
import Confetti from "react-confetti";
import icon from "../arrow.svg";
export default function RoundOver(props) {
  return (
    <div className="roundOver--cont">
      <Confetti />
      <p className="roundOver--text">Level {props.level.current} Completed!</p>
      <button onClick={props.btnHandler} className="roundOver--btn">
        Level {props.level.current + 1}{" "}
        <img className="icon" src={icon} alt="" />
      </button>
    </div>
  );
}
