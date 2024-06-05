/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import "./App.css";
import Button from './components/Button';
import Alert from './components/Alert';


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <div css={css`display: flex; align-items: left; flex-direction: column;`}>
        <Button styleType="primary" name="primary Button" />
        <Button styleType="secondary" name="secondary Buton" />
        </div>
    </div>
      <hr />
      <div className="alert-components-section">
      <Alert type="error" />
        <Alert type="warning" />
        <Alert type="info" />
        <Alert type="success" />
      </div>
    </div>
  );
}

export default App;
