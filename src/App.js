import React, { Component } from 'react';
import Nav from './components/Nav'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Container from './Container'
import Row from './Row'
import Column from './Column'
import Images from './components/Images'
import paintings from './paintings.json'
import StartBtn from './components/StartBtn'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'

// So is there a reason that we make this our stateful componenet instead of *just* the images?

function shufflePaintings(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    paintings,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
    ready: false
  };
  startGame = event => {
    event.preventDefault()
    console.log('here')
    this.setState({
      ready: true
    })
  }
  handleShuffle = () => {
    let shuffledPaintings = shufflePaintings(paintings);
    this.setState({ 
      paintings: shuffledPaintings
    });
  };
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore === 7) {
      this.setState({ 
        rightWrong: "You win!",
        ready: false
      });
    }
    else if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You lose",
      clicked: [],
      ready: false
    });
    this.handleShuffle();
  };
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
  render() {
    return (
      <Wrapper>
        <Nav 
          title="Mucha Clicker"
          rightWrong={this.state.rightWrong}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title>Try to click all of the Alphonse Mucha paintings once, but don't hit any duplictates - or it's game over!</Title>
        <Container>
          <StartBtn onClick={this.startGame}>Start Game</StartBtn>
          <Row>
            {this.state.paintings.map(paintings => (
              <Column size="md-3">
              <ReactPlaceholder delay={1000} showLoadingAnimation={true} type='rect' ready={this.state.ready} color='#E0E0E0' style={{ width: 200, height: 300, margin: 25 }}>
                <Images 
                  src={paintings.image}
                  id={paintings.id}
                  key={paintings.id}
                  handleClick={this.handleClick}
                  handleShuffle={this.handleShuffle}
                />
              </ReactPlaceholder>
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
