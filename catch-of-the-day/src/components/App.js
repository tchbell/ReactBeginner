import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
    // In ES6 if you have a property and value that have the same name
    // you can instead of typing it twice you can do it once
    //  this.setState({
    //    fishes,
    //  });
  };
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };
  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order,
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
