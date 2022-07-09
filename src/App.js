import logo from "../src/assets/KWNE.gif";
import styled from "styled-components";
//import reactRetroHitCounter from "react-retro-hit-counter";
import starsImage from "../src/assets/background-stars.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am, In fact, Duncan. And this page is a work in progress. Be gentle,
          I'm learning.
        </p>
      </header>
      <BackgroundImage src={starsImage} />
    </div>
  );
}

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${(props) => `url(${props.src})`};
`;

export default App;
