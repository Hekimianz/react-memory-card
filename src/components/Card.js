import React from "react";
import "./Card.css";
export default function Card(props) {
  const str = props.data.name;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  const [styles, setStyles] = React.useState({
    transition: ".3s all",
    transform: "scale(0)",
  });
  React.useEffect(() => {
    setStyles({
      transition: ".3s all",
      transform: "scale(1) rotate(360deg)",
    });
  }, []);

  return (
    <div onClick={() => props.handleClick(str)} className="card--cont">
      <img
        className="card--img"
        src={props.data.sprites.front_default}
        alt=""
        style={styles}
      />
      <h1 className="card--name">{str2}</h1>
    </div>
  );
}
