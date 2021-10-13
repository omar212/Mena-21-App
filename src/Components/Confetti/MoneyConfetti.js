import "./styles.css";
import React from 'react';
import Reward from "react-rewards";

const config = {
  emoji: ["💶", "💴", "💵", "💰"],
  elementCount: 100,
  spread: 150,
  zIndex: 9999,
  lifetime: 300
};

// Make non 🎈 emoji more rare
for (let i = 0; i < 25; i++) {
  config.emoji.push('💰')
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.reward.rewardMe()
  }

  handleClick = () => {
    // Blast Confetti
    this.reward.rewardMe()
  }

  render() {
    return (
      <div className="wrapper">
        <Reward
            ref={ref => this.reward = ref}
            type="emoji"
            lifetime={300}
            config={config}
            children={''}
        > 
        </Reward>
      </div>
    );
  }
}
