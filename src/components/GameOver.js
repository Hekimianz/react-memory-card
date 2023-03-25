import React from "react";
import "./GameOver.css";
export default function GameOver(props) {
  return (
    <div className="gameOver--cont">
      <p className="gameOver--text">Game Over!</p>
      <p className="score--cont">
        You lost on level: {props.score + 1} <span className="divider">|</span>{" "}
        Your high score: {props.bestScore}
      </p>
      <button className="play-again-btn" onClick={props.handleClick}>
        Play Again
      </button>
    </div>
  );
}
