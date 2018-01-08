import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

const imgArray = images.slice();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      imagesClicked: []
    };
  }
  render() {
    imgArray.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    const imageHTML = [];
    imgArray.forEach(element => {
      imageHTML.push(<ImageCard imgSrc={element.image} />);
    });
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Title>Score: {this.state.score}</Title>
        <Title>High Score: {this.state.highScore}</Title>
        {imageHTML}
      </Wrapper>
    );
  }
}

export default App;
