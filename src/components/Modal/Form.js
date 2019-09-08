import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';



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
        <fieldset className="movie-info ">
          <legend className="visually-hidden"><span>Información sobre la película</span></legend>
          <div className="field">
            <label>
              <span className="label-text">NOMBRE DE LA PELICULA</span>
              <input
                name="title"
                onChange={this.handleChange}
                // {
                //   //  value={this.state.title}
                // }
              />
            </label>
          </div>

          <div className="field">
            <label>
              <span className="label-text">CATEGORIA</span>
              <select name="genre" onChange={this.handleChange}>
                <option value="Acción">Acción</option>
                <option value="Animación">Animación</option>
                <option value="Aventuras">Aventuras</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Comedia">Comedia</option>
                <option value="Documentales">Documentales</option>
              </select>
            </label>
          </div>
        </fieldset>
        <button type="submit">Sign In</button>
      </form>
    )
  }
}