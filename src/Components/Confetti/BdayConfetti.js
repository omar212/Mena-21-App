import "./styles.css";
import React from 'react';
import Reward from "react-rewards";

const config = {
  emoji: ['🎈', '🎊', '🎉', '🎁', '⭐', '🦃'],
  elementCount: 100,
  spread: 100,
  zIndex: 9999,
  lifetime: 100
};

// Make non 🎈 emoji more rare
for (let i = 0; i < 10; i++) {
  config.emoji.push('🎈')
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      cakes: []
    }
  }

  componentDidMount() {
    this.reward.rewardMe()
    this.addCake()
  }

  addCake = () => {
    this.setState(prevState => {
      return {cakes: ['🎂', ...prevState.cakes]}
    })
  }

  increaseCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  handleClick = () => {
    // Reset after 3
    if (this.state.count > 3) {
      // Special bonus
      window.open('https://www.youtube.com/watch?v=4RSfosqKJx8', '_blank');

      this.setState({count: 0})
      return
    }

    // Blast Confetti
    this.reward.rewardMe()

    this.addCake()
    this.increaseCount()
  }

  render() {
    return (
      <div className="wrapper">
        <Reward
          ref={ref => this.reward = ref}
          type="emoji"
          config={config}
        >
          <button className="happy" onClick={this.handleClick}>
             Happy 21 <sup>st</sup> Birthday Princess !!
          </button>
          <div className="cake">{this.state.cakes.join('')}</div>
        </Reward>      
      </div>
    );
  }
}
