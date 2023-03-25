import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import RoundOver from "./components/RoundOver";
export default function App() {
  const [data, setData] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [roundOver, setRoundOver] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(
    localStorage.getItem("highScore") || 0
  );
  const level = React.useRef(1);
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((resp) => resp.json())
      .then((resp) => setData(resp.results));
  }, []);
  const results = data.map((item) => {
    return item;
  });

  function gameOverHandler() {
    setGameOver(true);
    level.current = 1;
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem("highScore", bestScore);
    }
  }

  function roundOverHandler() {
    setRoundOver(true);
    scoreUp();
  }

  function nextRound() {
    setRoundOver(false);
    level.current++;
  }

  function resetGame() {
    setGameOver(false);
  }
  function scoreUp() {
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div className="main--cont">
      <Header />
      {!gameOver && !roundOver && (
        <Game
          data={results}
          isGameOver={gameOver}
          gameOverHandler={gameOverHandler}
          roundOverHandler={roundOverHandler}
          level={level.current + 2}
        />
      )}
      {roundOver && <RoundOver btnHandler={nextRound} level={level} />}
      {gameOver && (
        <GameOver handleClick={resetGame} score={score} bestScore={bestScore} />
      )}
      <footer>
        Made by
        <a href="https://github.com/Hekimianz" target="_blank" rel="noreferrer">
          Aram Hekimian
        </a>
      </footer>
    </div>
  );
}
