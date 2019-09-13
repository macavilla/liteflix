import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';
import Categories from './Categories';

import Select from 'react-select';



export default class Form extends Component {
  state = {
    file: null,
    title: '',
    category: '',
  };

  handleChange = (event) => {
    const input = event.target;
    // console.log(localStorage);

    const value = input.value;

    this.setState({ [input.name]: value });
  };



  handleFormSubmit = () => {
    const { title, category, file } = this.state;

    localStorage.setItem('file', file);
    localStorage.setItem('title', title);
    localStorage.setItem('category', category);
  };


  componentDidMount() {
    const file = localStorage.getItem('file');
    const title = localStorage.getItem('title');
    const category = localStorage.getItem('category');
    this.setState({ file, title, category });
  }
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
              placeholder="NOMBRE DE LA PELICULA"
              onChange={this.handleChange}

            />

            <label htmlFor="title">
              <span className="label-text">NOMBRE DE LA PELICULA</span>
            </label>

          </div>

          <div className="field category">

            <Categories />


          </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
    )
  }
}