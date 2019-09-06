import React, { Component } from 'react';



export default class Form extends Component {
    state = {
      title: '',
      genre: '',
    };
   
    handleChange = (event) => {
      const input = event.target;
      console.log(localStorage);
      
      const value = input.value;
   
      this.setState({ [input.name]: value });
    };
   
    handleFormSubmit = () => {
        const { title, genre } = this.state;

        localStorage.setItem('title', title);
        localStorage.setItem('genre', genre);
      };
   

      componentDidMount() {
        const title = localStorage.getItem('title');
        const genre = localStorage.getItem('genre');
        this.setState({ title, genre });
      }
    render() {
        return (
          <form onSubmit={this.handleFormSubmit}>
            <label>
              title:{" "}
              <input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>

            <select name="genre" onChange={this.handleChange}>
              <option value="Acción">Acción</option>
              <option value="Animación">Animación</option>
              <option value="Aventuras">Aventuras</option>
              <option value="Ciencia Ficción">Ciencia Ficción</option>
              <option value="Comedia">Comedia</option>
              <option value="Documentales">Documentales</option>
            </select>
            <button type="submit">Sign In</button>
          </form>
        )
      }
  }