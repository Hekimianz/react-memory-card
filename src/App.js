import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
export default function App() {
  const [data, setData] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
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
  }

  function resetGame() {
    setGameOver(false);
  }

  return (
    <div className="main--cont">
      <Header />
      {!gameOver && (
        <Game
          data={results}
          isGameOver={gameOver}
          gameOverHandler={gameOverHandler}
        />
      )}

      {gameOver && <GameOver handleClick={resetGame} />}
      <footer>
        Made by
        <a href="https://github.com/Hekimianz" target="_blank" rel="noreferrer">
          Aram Hekimian
        </a>
      </footer>
    </div>
  );
}
