import React from "react";
import "./GameOver.css";
export default function GameOver(props) {
  return (
    <div className="gameOver--cont">
      <p className="gameOver--text">Game Over!</p>
      <button className="play-again-btn" onClick={props.handleClick}>
        Play Again
      </button>
    </div>
  );
}
