import React from "react";
import { createGlobalStyle } from "styled-components";
import { BobaProvider } from "src/utils/context/boba";

import About from "src/components/About";
import FAQ from "src/app/components/FAQ";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bubbleboddy";
    font-weight: 700;
    src: url("/fonts/Bubbleboddy-FatTrial.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 400;
    src: url("/fonts/Raleway-Light.ttf") format("truetype");
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(180deg, #E5C49E 0%, #FFFFFF 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC = () => (
  <BobaProvider>
    <About />
    <GlobalStyle />
    <HelloWorldTestState />
    <FAQ />
  </BobaProvider>
);
export default App;
