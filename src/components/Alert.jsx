// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Frown from "../assets/frown.svg";
import AlertCircle from "../assets/alert-circle.svg";
import AlertTriagle from "../assets/alert-triangle.svg";
import CheckCircle from "../assets/check-circle.svg";

function Alert(props) {
  let bgColor = undefined;
  let AlertIcon = undefined;

  if (props.type === "error") {
    bgColor = "#F9C8C8";
    AlertIcon = Frown;
  } else if (props.type === "warning") {
    bgColor = "#F9D9C8";
    AlertIcon = AlertTriagle;
  } else if (props.type === "info") {
    bgColor = "#F9EBC8";
    AlertIcon = AlertCircle;
  } else if (props.type === "success") {
    bgColor = "#CEF7CD";
    AlertIcon = CheckCircle;
  }
  return (
    <>
      <div
        className="alert-box"
        css={css`
          width: 650px;
          height: 76px;
          border: none;
          border-radius: 4px;
          text-align: start;
          padding: 0px 16px;
          color: white;
          gap: 8px;
          background-color: ${bgColor};
          color: black;
          font-weight: 600;
          display: flex;
          align-items: center;
        `}
      >
        <img src={AlertIcon} alt={AlertIcon} />
        <p>{`This is ${props.type} alert box`}</p>
      </div>
    </>
  );
}

export default Alert;
