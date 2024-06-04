import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ImgOctagon from "./assets/alert-octagon.png";
import ImgTriangle from "./assets/alert-triangle.png";
import ImgCircle from "./assets/alert-circle.png";
import ImgCheck from "./assets/check-square.png";

function App() {
  const color = {
    primary: "rgba(7, 78, 232, 1)",
    secondary: "rgba(7, 164, 232, 1)",
    error: "rgba(222, 87, 83, 1)",
    success: "rgba(38, 183, 149, 1)",
  };
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color={color["primary"]} />
        <Button color={color["secondary"]} />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert src={ImgOctagon} alt={ImgOctagon} />
        <Alert src={ImgTriangle} alt={ImgTriangle} />
        <Alert src={ImgCircle} alt={ImgCircle} />
        <Alert src={ImgCheck} alt={ImgCheck} />
      </div>
    </div>
  );
}

export default App;
