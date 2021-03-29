import React, { useState } from "react";
import hat from "./upsideDownHat.png";
import "./Form.css";

const n: string = "";
const nList: string[] = [];

const Form = () => {
  const [name, setName] = useState(n);
  const [list, setList] = useState(nList);

  // handleChange = (n: string) => {
  //   this.setState({ name: n });
  //   console.log("Here is a name ", this.state.name);
  // };

  const onClear = (): void => {
    setList([]);
  };

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
        </div>
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
