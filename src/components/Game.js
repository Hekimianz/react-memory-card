import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import "./Game.css";
export default function Game(props) {
  const [results, setResults] = React.useState([]);
  const level = 3;
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  const shuffled = shuffle(props.data);
  React.useEffect(() => {
    shuffled.slice(0, level).map((item) => {
      fetch(item.url)
        .then((resp) => resp.json())
        .then((resp) =>
          setResults((prevData) => {
            return prevData.concat(resp);
          })
        );
    });
  }, [props.data]);

  const cards = results.map((item) => {
    return <Card key={nanoid()} data={item} />;
  });
  return <div className="game--cont">{cards}</div>;
}
