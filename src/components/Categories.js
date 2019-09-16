import React, { Component } from 'react';
import Select from 'react-select';

const categories = [
  { label: "Acción", value: "Acción" },
  { label: "Animación", value: "Animación" },
  { label: "Aventuras", value: "Aventuras" },
  { label: "Ciencia Ficción", value: "Ciencia Ficción" },
  { label: "Comedia", value: "Comedia" },
  { label: "Documentales", value: "Documentales" },
  { label: "Suspenso", value: "Suspenso" }
];




export default class Categories extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: ''
    }
  }


  handleSelect = selectedOption => {
    const category = selectedOption.value;
    this.setState({ selectedOption });
    console.log(`Option selected:`, category);
    localStorage.setItem('category', category);
  };

  render() {

    return (
      <Select onChange={this.handleSelect} className="select-category" classNamePrefix="category" openMenuOnFocus={true}
        placeholder=""
        isSearchable={false}
        components={{
          IndicatorsContainer: () => null
        }}
        options={categories} />

    )
  }
}
