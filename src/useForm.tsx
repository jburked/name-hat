const names = ["Joe", "Shiny One", "Shiny Two"];

const pickName = () => {
  console.log("Here is the name " + Math.floor(Math.random() * names.length));
  //   return Math.floor(Math.random() * names.length);
};

const nameForm = () => {
  return (
    <div>
      <h2>Put Some Names in the Hat</h2>

      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div>
              <label htmlFor="fname">Give it a name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Someone's name you want t"
              />
              {pickRandomButton}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const pickRandomButton = () => {
  return <button onChange={pickName}>PICK A NAME</button>;
};

export default nameForm;
