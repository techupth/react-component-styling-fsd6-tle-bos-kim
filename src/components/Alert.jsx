// Start coding here
import "./Alert.css";
import ErrorImage from "./images/frown.svg";
import WarningImage from "./images/alert-triangle.svg";
import InfoImage from "./images/alert-circle.svg";
import SuccesImage from "./images/check-circle.svg";

function Alert(props) {
  if (props.type === "error") {
    return (
      <div className={props.type}>
        <img src={ErrorImage} alt="error" />
        <span>This is error alert box</span>
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div className={props.type}>
        <img src={WarningImage} alt="warning" />
        <span>This is warning alert box</span>
      </div>
    );
  } else if (props.type === "info") {
    return (
      <div className={props.type}>
        <img src={InfoImage} alt="info" />
        <span>This is info alert box</span>
      </div>
    );
  } else if (props.type === "success") {
    return (
      <div className={props.type}>
        <img src={SuccesImage} alt="success" />
        <span>This is success alert box</span>
      </div>
    );
  }
}

export default Alert;
