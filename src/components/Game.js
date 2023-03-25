import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import "./Game.css";
export default function Game(props) {
  const [results, setResults] = React.useState([]);

  const level = 5;
  function shuffle(array) {
    const arr = array.sort(() => Math.random() - 0.5);
    const arr2 = arr.sort(() => Math.random() - 0.5);
    const arr3 = arr2.sort(() => Math.random() - 0.5);
    const arr4 = arr3.sort(() => Math.random() - 0.5);
    const arr5 = arr4.sort(() => Math.random() - 0.5);
    return arr5;
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

  let cards = results.map((item) => {
    return <Card handleClick={shuffleOnClick} key={nanoid()} data={item} />;
  });

  return <div className="game--cont">{cards}</div>;
}
