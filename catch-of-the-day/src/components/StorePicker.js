import React from 'react';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    // Get text from input
    const storeName = this.myInput.current.value;
    // change page to /store/input-value
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
