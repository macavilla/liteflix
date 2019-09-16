// localStorage input component
// based on this tutorial: 
// https://programmingwithmosh.com/react/localstorage-react/



//
import React, { Component } from "react";


class MovieTitle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    handleChange(event) {
        let input = event.input;
        let value = input.value;

        this.setState({
            [input.name]: value
        });
    };

    handleFormSubmit = () => {
        const { title } = this.state;

        localStorage.setItem('title', title);
    };

    render() {
        return (

            <div>
                <label id="label-title" htmlFor="">
                    NOMBRE DE LA PELICULA
                    </label>
                <input name="title" id="title-input" value={this.state.title} onChange={this.handleChange} type="text" />
            </div>

        )
    }
}




export default MovieTitle