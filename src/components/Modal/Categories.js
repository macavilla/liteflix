import React, { Component } from 'react';
import Select from 'react-select';

const categories = [
    { label: "Acción", value: "Acción" },
    { label: "Animación", value: "Animación" },
    { label: "Aventuras", value: "Aventuras" },
    { label: "Ciencia Ficción", value: "Ciencia Ficción" },
    { label: "Comedia", value: "Comedia" },
    { label: "Documentales", value: "Documentales" }
  ];




  export default class Categories extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedOption: ''
        }
    }

    
      handleSelect = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

      render(){

        return(
            <Select className="select-category" classNamePrefix="category" openMenuOnFocus={true} placeholder="CATEGORIA" options={categories} />
        )
      }
  }
  