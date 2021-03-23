import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Form.css";

const globalNames = ["Enzo", "Erik", "Mandy", "Louis", "Lauren"];
class HatList extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { globalNames };
  }
  render() {
    return AppContainer;
  }
}
function App() {
  return <AppContainer />;
}

const AppContainer = (): JSX.Element => {
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
};

function addNameToList(name: string) {
  // <BounceIn>{name}</BounceIn>;
  console.log("Here is the name you added : ", name);
  globalNames.push(name);
}

function Form(someNames: string[]) {
  return (
    <div>
      {NameList(globalNames)}

      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-75">
              <input
                type="text"
                name="firstname"
                placeholder="Put that name in this hat"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            onSubmit={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              addNameToList(ev.target.value)
            }
          />
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

function Comment(name: string) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <div className="UserInfo-name">{name}</div>
      </div>
    </div>
  );
}

export default App;
