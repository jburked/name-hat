import React, { useState } from "react";
import hat from "./upsideDownHat.png";
import "./Form.css";

const n: string = "";
const nList: string[] = [];

const Form = () => {
  const [name, setName] = useState(n);
  const [list, setList] = useState(nList);

  const onDraw = () => {
    if (list && list.length > 1) {
      alert(list[Math.floor(Math.random() * list.length)]);
    } else {
      alert("We need some names in the hat first!");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        list.push(name);
        setName("");
      }}
    >
      <div className="row">
        <div className="col-75">
          <input
            type="name"
            value={name}
            placeholder="Put that name in this hat"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input type="submit"></input>
          <button type="reset" onClick={() => setList([])}>
            CLEAR
          </button>
        </div>
      </div>
      <div>
        <ul className="List-container">
          {list.map((name) => (
            <li key={name}>
              <button onClick={() => setList(list.filter((n) => n !== name))}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="Hat-box">
        <div className="Hat-box-inner">
          {<img src={hat} className="Hat" alt="logo" onClick={onDraw} />}
        </div>
      </div>
    </form>
  );
};

export default Form;
