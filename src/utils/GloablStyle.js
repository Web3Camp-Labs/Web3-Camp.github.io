import { createGlobalStyle } from "styled-components";
import "../assets/fonts.scss";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AdobeGurmukhi-Bold";
    src: url("https://web3camp.us/AdobeGurmukhi-Bold.otf");
  }
  @font-face {
    font-family: "Helvetica";
    src: url('https://web3camp.us/Helvetica.ttc');
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: #fff;
    color: #000;
  }
  * {
    padding: 0;
    margin: 0;
    font-family:"Open Sans", sans-serif
  }

  a{
    text-decoration: none;
    color: #666666;
  }

  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .titleBold{
    font-family: "Jost-Bold";
    font-size: 48px;
  }
  .mainContent{
    margin: 0 auto;
    width: 1270px;
  }

  @keyframes moveTop {
    from {
      -webkit-transform: rotateX(13deg) rotateY(0deg);
      transform: rotateX(13deg) rotateY(0deg);
    }

    to {
      -webkit-transform: rotateX(13deg) rotateY(360deg);
      transform: rotateX(13deg) rotateY(360deg);
    }
  }
`;
export default GlobalStyle
