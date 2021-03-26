import React, { useState, Component } from "react";

import hat from "./upsideDownHat.png";
import "./App.css";
import "./Form.css";

function App() {
  return Form();
}

function Form() {
  const [name, setName] = useState("");
  const initialList: string[] = [];
  const [list, setList] = useState(initialList);

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
    <div className="App">
      <header className="App-header">
        <h1>Let's put some names in this hat!</h1>
        <div>
          {list.map}

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
        </div>
        <div className="Hat-box">
          <div className="Hat-box-inner">
            {<img src={hat} className="Hat" alt="logo" onClick={onDraw} />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
