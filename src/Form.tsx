import { useState } from "react";
import "./Form.css";

const names = ["Enzo", "Erik", "Mandy", "Louis", "Lauren"];

function Form() {
  const [name, setName] = useState("");
  const Input = (): JSX.Element => {
    return (
      <input
        type="text"
        value={name}
        name="firstname"
        placeholder="Someone's name you want t"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
          setName(ev.target.value)
        }
      />
    );
  };
  return (
    <div>
      <h2>Put Some Names in the Hat</h2>

      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div>
              <label htmlFor="fname">Give it a name</label>
            </div>
            <div className="col-75">{Input}</div>
          </div>
          <input
            type="submit"
            value="Submit"
            onSubmit={() => addToList(name)}
          />
        </form>
      </div>
    </div>
  );
}

function addToList(name: string) {
  names.push(name);
  return name + " has been added to the list";
}

// function pickName() {
//   alert("The winner is : " + names[Math.floor(Math.random() * names.length)]);
// }

export default Form;
