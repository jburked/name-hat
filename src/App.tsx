import React from "react";
import { useForm } from "react-hook-form";
import hat from "./upsideDownHat.png";
import "./App.css";
import "./Form.css";
let listOfNames: string[] = [];

function App() {
  return <AppContainer />;
}

function AppContainer() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hat} className="App-logo" alt="logo" />
        <h2>Let's put some names in this hat!</h2>
        {Form()}
      </header>
    </div>
  );
}

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    addNameToList(String(data.name), listOfNames);
    console.log(data);
  };
  const onClick = () => {
    listOfNames = [];
    console.log("No name in the hate : ", listOfNames);
  };
  return (
    <div>
      {NameList(listOfNames)}

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
              {errors.exampleRequired && <p>This field is required</p>}
            </div>
          </div>
          <div>
            <input type="clear" onClick={onClick} />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

function addNameToList(name: string, listOfNames: string[]) {
  console.log("Here is the name you added : ", name);

  listOfNames.push(name);

  console.log("Here is the list you added : ", listOfNames);
}

function NameList(listOfNames: string[]) {
  const listNames = listOfNames.map((theName) => <li>{theName}</li>);
  return <ul>{listNames}</ul>;
}

function pickName() {
  console.log(
    "Here is the name " +
      listOfNames[Math.floor(Math.random() * listOfNames.length)]
  );
  //   return Math.floor(Math.random() * names.length);
}

export default App;
