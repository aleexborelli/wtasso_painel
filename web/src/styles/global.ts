import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px Roboto, sans-serif;
  }

  .container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
  }
  .painel-logo {
    min-height: 500px;
    max-height: 500px;

    min-width: 450px;
    max-width: 450px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffa615;

    -webkit-box-shadow: 1px 0px 5px 1px rgba(0,0,0,0.52);
    box-shadow: 1px 0px 5px 1px rgba(0,0,0,0.52);
  }

  .painel-login {
    min-height: 500px;
    max-height: 500px;

    min-width: 450px;
    max-width: 450px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    background: #c3c3c3;

    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.52);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.52);
  }

  #title {
    font-size: 80px;
  }

  #subtitle {
    text-transform: uppercase;
    font-size: 22px;
    color: #c3c3c3;
    margin-top: -15px;
  }

  span {
    text-align: center;
  }
`
