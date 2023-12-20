import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" text="Primary" />
        <br />
        <Button type="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert status="error" statusText="This is error alert box" />
        <Alert
          status="warning"
          statusText="This is a warning alert box"
        ></Alert>
        <Alert status="info" statusText="This is an info alert box"></Alert>
        <Alert
          status="success"
          statusText="This is a success alert box"
        ></Alert>
      </div>
    </div>
  );
}

export default App;
