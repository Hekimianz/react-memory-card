import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((resp) => resp.json())
      .then((resp) => setData(resp.results));
  }, []);
  const results = data.map((item) => {
    return item;
  });

  return (
    <div className="main--cont">
      <Header />
      <Game data={results} />
    </div>
  );
}
