/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
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
          background-color: ${props.color};
        `}
      >
        Button
      </button>
    </>
  );
}

export default Button;
