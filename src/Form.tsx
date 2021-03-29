import React, { useState } from "react";
import hat from "./upsideDownHat.png";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);

  // handleChange = (n: string) => {
  //   this.setState({ name: n });
  //   console.log("Here is a name ", this.state.name);
  // };

  const onSubmit = (n: string) => {
    console.log("Here is the name you want in the hat ", n);
    const newList = list.concat(n);
    setList(newList);
    console.log("Here is a list of names ", list);
    setName("");
  };

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
    <form onSubmit={(e) => onSubmit(e.currentTarget.value)}>
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
    </form>
  );
};

export default Form;
