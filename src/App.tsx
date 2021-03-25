import React, { Component } from "react";

import hat from "./upsideDownHat.png";
import "./App.css";
import "./Form.css";

function App() {
  return <Form />;
}

class Form extends Component {
  state: { nameList: string[]; name: string } = { nameList: [], name: "" };
  // const initialList: string[] = [];
  names = this.state.nameList;

  handleChange = (n: string) => {
    this.setState({ name: n });
    console.log("Here is a name ", this.state.name);
  };

  onSubmit = (n: string) => {
    console.log("Here is the name you want in the hat ", this.state.name);
    this.names?.push(n);
    console.log("Here is a list of names ", this.state.nameList);
  };

  onClear = () => {
    this.setState({ nameList: [] });
  };

  onDraw = () => {
    if (this.state.nameList && this.state.nameList.length > 1) {
      alert(
        this.state.nameList[
          Math.floor(Math.random() * this.state.nameList.length)
        ]
      );
    } else {
      alert("We need some names in the hat first!");
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Let's put some names in this hat!</h1>
          <div>
            {this.state.nameList}

            <div className="container">
              <form>
                <div className="row">
                  <div className="col-75">
                    <input
                      type="name"
                      name="name"
                      placeholder="Put that name in this hat"
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        this.handleChange(e.currentTarget.value)
                      }
                      onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
                        this.onSubmit(e.currentTarget.value);
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
