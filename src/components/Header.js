import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header--cont">
      <h1>Memoron</h1>
      <div className="header--score-cont">
        <span className="header--score-current">
          Current Score: <span className="divider">|</span>{" "}
          <span className="header--score-highScore">High Score: </span>
        </span>
      </div>
    </div>
  );
}
