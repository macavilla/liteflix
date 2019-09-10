import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';

import Select from 'react-select';

const scaryAnimals = [
  { label: "Animación", value: 1 },
  { label: "Aventuras", value: 2 },
  { label: "Ciencia Ficción", value: 3 },
  { label: "Comedia", value: 4 },
  { label: "Documentales", value: 5 }
];


export default class Form extends Component {
  state = {
    file: null,
    title: '',
    genre: '',
  };

  handleChange = (event) => {
    const input = event.target;
    // console.log(localStorage);

    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleSelect = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleFormSubmit = () => {
    const { title, genre, file } = this.state;

    localStorage.setItem('file', file);
    localStorage.setItem('title', title);
    localStorage.setItem('genre', genre);
  };


  componentDidMount() {
    const file = localStorage.getItem('file');
    const title = localStorage.getItem('title');
    const genre = localStorage.getItem('genre');
    this.setState({ file, title, genre });
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

          <div className="field">
          <Select options={scaryAnimals} />
          
          {
              // <label>
              //     <span className="label-text">CATEGORIA</span>
              //     <select name="genre" onChange={this.handleChange}>
              //       <option value="Acción">Acción</option>
              //       <option value="Animación">Animación</option>
              //       <option value="Aventuras">Aventuras</option>
              //       <option value="Ciencia Ficción">Ciencia Ficción</option>
              //       <option value="Comedia">Comedia</option>
              //       <option value="Documentales">Documentales</option>
              //     </select>
              //   </label>

            }          
            </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
    )
  }
}