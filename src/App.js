import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

// const imgArray = images.slice();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      imgArray: images.slice(),
      imagesClicked: []
    };
  }

  updateScore = clickedImgID => {
    console.log(clickedImgID);
    if (this.state.imagesClicked.includes(clickedImgID)) {
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        });
      }
      this.setState({
        score: 0,
        imagesClicked: []
      });
    } else {
      this.state.imagesClicked.push(clickedImgID);
      this.setState({ score: this.state.score + 1 });
    }
    console.log(this.state.imagesClicked);
  };

  render() {
    this.state.imgArray.sort((a, b) => 0.5 - Math.random());

    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Title>Score: {this.state.score}</Title>
        <Title>High Score: {this.state.highScore}</Title>
        {this.state.imgArray.map(img => (
          <ImageCard
            action={() => this.updateScore(img.id)}
            key={img.id}
            alt={img.id.toString()}
            imgSrc={img.image}
          />
        ))}
      </Wrapper>
    );
  }
}
