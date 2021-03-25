import React, { Component } from "react";

import hat from "./upsideDownHat.png";
import "./App.css";
import "./Form.css";

function App() {
  return <Form />;
}

class Form extends Component {
  state: { nameList?: string[]; name?: string } = { nameList: [], name: "" };
  // const initialList: string[] = [];
  names = this.state.nameList;

  onSubmit = (n: string) => {
    this.setState({ name: n });
  };

  onClear = () => {
    this.setState({ names: [] });
  };

  onDraw = () => {
    if (this.names && this.names.length > 1) {
      alert(this.names[Math.floor(Math.random() * this.names.length)]);
    } else {
      alert("We need some names in the hat first!");
    }
  };

  // const nameList = () => {
  //   const listNames = initialList.map((theName) => <li>{theName}</li>);
  //   return <ul>{listNames}</ul>;
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Let's put some names in this hat!</h1>
          <div>
            {this.names}

            <div className="container">
              <form
                onSubmit={(event: React.SyntheticEvent) => {
                  const target = event.target as typeof event.target & {
                    name: { value: string };
                  };
                  const name = target.name.value;
                  this.onSubmit(name);
                }}
              >
                <div className="row">
                  <div className="col-75">
                    <input
                      type="name"
                      name="name"
                      placeholder="Put that name in this hat"
                      value={this.state.name}
                      onSubmit={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        this.setState({ name: e.currentTarget.value });
                      }}
                    />
                    <input type="submit"></input>

                    <button type="reset" onClick={this.onClear}>
                      CLEAR
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="Hat-box">
            <div className="Hat-box-inner">
              {
                <img
                  src={hat}
                  className="Hat"
                  alt="logo"
                  onClick={this.onDraw}
                />
              }
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
