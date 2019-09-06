import React, { Component } from 'react';



export default class Form extends Component {
    state = {
      title: '',
      genre: '',
      rememberMe: false
    };
   
    handleChange = (event) => {
      const input = event.target;
      console.log(input.value);
      
      const value = input.value;
   
      this.setState({ [input.name]: value });
    };
   
    handleFormSubmit = () => {
        const { title, genre } = this.state;
        // localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('title', title);
        localStorage.setItem('genre', genre);
      };
   

      componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const title = rememberMe ? localStorage.getItem('title') : '';
        this.setState({ title, rememberMe });
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
            {
              //     <label>
              //   <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
              // </label>
            }

            <select name="genre" onChange={this.handleChange} >
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
            <button type="submit">Sign In</button>
          </form>
        )
      }
  }