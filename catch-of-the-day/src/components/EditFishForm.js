import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (e) => {
    //update fish
    //Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      //es6 allows to be updated dynamically based on field name
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  handleDelete = () => {
    this.props.deleteFish(this.props.index);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          pname="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={this.handleDelete}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
