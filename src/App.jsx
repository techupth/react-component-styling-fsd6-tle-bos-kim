import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button name="primary" />
        <Button name="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      </div>
    </div>
  );
}

export default App;
