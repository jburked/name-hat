import React from "react";
import { useForm } from "react-hook-form";
import logo from "./logo.svg";
import "./App.css";
import "./Form.css";

const globalNames: string[] = [];
// class HatList extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { globalNames };
//   }
//   render() {
//     return AppContainer;
//   }
// }
function App() {
  return <AppContainer />;
}

function AppContainer() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {Form(globalNames)}
      </header>
    </div>
  );
}

function addNameToList(name: string) {
  // <BounceIn>{name}</BounceIn>;
  console.log("Here is the name you added : ", name);
  globalNames.push(name);
}

function Form(someNames: string[]) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    addNameToList(String(data.name));
    console.log(data);
  };
  return (
    <div>
      {NameList(globalNames)}

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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

function NameList(names: string[]) {
  return (
    <div>
      <h1>{globalNames.join(", ")}</h1>
    </div>
  );
}

// function Comment(name: string) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <div className="UserInfo-name">{name}</div>
//       </div>
//     </div>
//   );
// }

export default App;
