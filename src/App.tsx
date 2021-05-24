import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hat knows best</h1>

        <div>
          <Form />
        </div>
        <script src="/__/firebase/8.4.1/firebase-app.js"></script>
        <script src="/__/firebase/8.4.1/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
      </header>
    </div>
  );
}

export default App;
