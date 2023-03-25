import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import "./Game.css";
export default function Game(props) {
  const [results, setResults] = React.useState([]);
  const [usedCards, setUsedCards] = React.useState([]);
  const [level, setLevel] = React.useState();

  function shuffle(array) {
    const arr = array.sort(() => Math.random() - 0.5);
    return arr;
  }
  const shuffled = shuffle(props.data);
  React.useEffect(() => {
    shuffled.slice(0, props.level).map((item) => {
      fetch(item.url)
        .then((resp) => resp.json())
        .then((resp) =>
          setResults((prevData) => {
            return prevData.concat(resp);
          })
        );
    });
  }, [shuffled, level]);

  function checkShuffle(arr1, arr2) {
    if (arr1[0].name === arr2[0].name) {
      return false;
    } else {
      return true;
    }
  }

  function shuffleOnClick() {
    setResults((prevData) => {
      const arr = [...prevData];
      const shuffledArr = shuffle(arr);
      if (checkShuffle(prevData, shuffledArr) === true) {
        return shuffledArr;
      } else {
        return shuffle(shuffledArr);
      }
    });
  }

  function checkClicked(name) {
    if (usedCards.includes(name)) {
      props.gameOverHandler();
    } else {
      setUsedCards((prevData) => prevData.concat(name));
    }
  }

  function checkIfWin() {
    if (usedCards.length === props.level) {
      setResults([]);
      setUsedCards([]);
      props.roundOverHandler();
    }
  }

  function clickCard(name) {
    shuffleOnClick();
    checkClicked(name);
  }
  checkIfWin();
  let cards = results.map((item) => {
    return <Card handleClick={clickCard} key={nanoid()} data={item} />;
  });

  return <div className="game--cont">{cards}</div>;
}
