import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

const imgArray = images.slice();

imgArray.sort(function(a, b) {
  return 0.5 - Math.random();
});

const characterHTML = [];

imgArray.forEach(element => {
  characterHTML.push(
    <ImageCard
      name={element.name}
      occupation={element.occupation}
      location={element.location}
      imgSrc={element.image}
    />
  );
});

const App = () => (
  <Wrapper>
    <Title>Clicky Game!</Title>
    {characterHTML}
  </Wrapper>
);

export default App;
