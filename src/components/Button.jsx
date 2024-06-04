/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let color = undefined;
  switch (props.type) {
    case "primary":
      color = "rgba(7, 78, 232, 1)";
      break;
    case "secondary":
      color = "rgba(7, 164, 232, 1)";
      break;
    case "error":
      color = "rgba(222, 87, 83, 1)";
      break;
    case "success":
      color = "rgba(38, 183, 149, 1)";
      break;
    default:
      console.log(`Don't have type of button`);
      break;
  }
  return (
    <>
      <button
        css={css`
          width: 171.19px;
          height: 50px;
          border: none;
          border-radius: 4px;
          text-align: center;
          padding: 0px 16px;
          color: white;
          gap: 8px;
          background-color: ${color};
        `}
      >
        {props.type}
      </button>
    </>
  );
}

export default Button;
