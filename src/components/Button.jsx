/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = ({styleType,name}) => (
    <button css={css`
    padding: 16px 16px;
    background-color: ${styleType === 'primary' ? '#074EE8' : '#07A4E8'};
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin: 10px;
    text-align: center;
    width: 171px;
    height: 50px;
    gap: 8px;
    `}>{name}</button>
  );
  export default Button;