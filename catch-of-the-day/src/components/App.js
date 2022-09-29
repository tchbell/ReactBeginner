import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    // reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

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

  updateFish = (key, updatedFish) => {
    // Take a copy of the current state
    const fishes = { ...this.state.fishes };
    //update that state
    fishes[key] = updatedFish;
    //set that to state
    this.setState({ fishes });
  };
  deleteFish = (key) => {
    // take a copy of state
    const fishes = { ...this.state.fishes };
    //update state
    fishes[key] = null;
    this.setState({ fishes });
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
  removeFromOrder = (key) => {
    // copy state
    const order = { ...this.state.order };
    //update state
    delete order[key];
    this.setState({ order });
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
        <Order
          removeFromOrder={this.removeFromOrder}
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
        />
      </div>
    );
  }
}

export default App;
