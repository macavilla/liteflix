import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';
import Categories from './Categories';



export default class Form extends Component {
  constructor(props){
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

    localStorage.setItem('title', this.state.title);

  };



  handleFormSubmit = () => {
    const { title } = this.state;

    localStorage.setItem('title', title);
  };


  componentDidMount() {

    // this.setState({
    //   cover: localStorage.getItem(cover),
    //   title: localStorage.getItem(title),
    //   category: localStorage.getItem(category)
    // });

    if (this.state.cover && this.state.title && this.state.category) {
      console.log('====================================');
      console.log(' completo');
      console.log('====================================');
    }

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
          <button type="submit">Sign In</button>
        </div>
      </form>
    )
  }
}