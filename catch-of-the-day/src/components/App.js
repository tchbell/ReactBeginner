import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
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
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {/* <Fish /> */}
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
