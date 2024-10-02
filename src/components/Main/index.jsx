import React from "react";
import { useState } from "react";
import "./main.scss";

const MainPage = () => {
  const [arrayText, setArrayText] = useState([]);
  const [text, setText] = useState("");

  const onChange = (evt) => {
    console.log(evt.target.id);
    setText(evt.target.value);
  };

  const handleClick = () => {
    setArrayText((prevState) => [...prevState, text]);
    setText("");
  };

  return (
    <div className="mainWrapper">
      <input onChange={onChange} id="fwdx" value={text} placeholder="text" />
      <button onClick={handleClick}>Add Text</button>
      <div>
        {arrayText.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default MainPage;
