import { useState } from "react";
import { useForm } from "react-hook-form";
import hat from "./upsideDownHat.png";
import "./App.css";
import "./Form.css";
let listOfNames: string[] = [];

function App() {
  return <Form />;
}

function Form() {
  const { register, handleSubmit, errors } = useForm();
  var initialList: string[] = [];

  const onSubmit = (data: any) => {
    addNameToList(String(data.name), listOfNames);
    console.log(data);
  };
  const onClick = () => {
    listOfNames = [];
    console.log("No name in the hate : ", listOfNames);
  };

  const onDraw = () => {
    if (listOfNames.length > 1) {
      alert(listOfNames[Math.floor(Math.random() * listOfNames.length)]);
    } else {
      alert("We need some names in the hat first!");
    }
  };

  const nameList = () => {
    const listNames = initialList.map((theName) => <li>{theName}</li>);
    return <ul>{listNames}</ul>;
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's put some names in this hat!</h1>
        <div>
          {nameList}

          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-75">
                  <input
                    type="text"
                    name="name"
                    placeholder="Put that name in this hat"
                    ref={register}
                  />
                  <input type="submit"></input>
                  {errors.exampleRequired && <p>This field is required</p>}
                  <button type="reset" onClick={onClick}>
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
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

function addNameToList(name: string, listOfNames: string[]) {
  console.log("Here is the name you added : ", name);

  listOfNames.push(name);

  console.log("Here is the list you added : ", listOfNames);
}

export default App;
