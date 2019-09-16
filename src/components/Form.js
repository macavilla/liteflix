// TO DO: Lift state up in parent component
// https://reactjs.org/docs/lifting-state-up.html#lifting-state-up

import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';
import Categories from './Categories';



export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: '',
      title: '',
      category: '',
      isButtonDisabled: true
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });

    if (value.length > 0) {

      this.setState({
        isButtonDisabled: false
      })

    } else {
      this.setState({ isButtonDisabled: true })
    }

    localStorage.setItem('title', this.state.title);
  };



  handleFormSubmit = () => {
    const { title } = this.state;

    localStorage.setItem('title', title);
  };



  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>

        <DragAndDrop></DragAndDrop>
        <div id="movie-info" className="fieldset">
          <div className="field title">
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              placeholder="NOMBRE DE LA PELICULA"
              onChange={this.handleChange}

            />

            <label htmlFor="title">
              <span className="label-text">
                NOMBRE DE LA PELICULA
              </span>
            </label>

          </div>

          <div className="field category">

            <Categories value={this.state.category} />


          </div>
        </div>
        <div className="button-wrapper">
          <button
            id="movie-upload-btn"
            type="submit"
            disabled={this.state.isButtonDisabled ? 'disabled' : undefined}
          >
            <span>Subir película</span>
          </button>
        </div>
      </form>
    )
  }
}