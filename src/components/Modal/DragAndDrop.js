import React, { Component } from 'react';



export default class Form extends Component {
    state = {
        isLoading: false,
        file: ''
    };


    imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            this.setState({isLoading: true});
            console.log("isLoading", this.state.isLoading);

            localStorage["fileBase64"] = base64;
            console.debug("file stored", base64);
        });
    };


    render() {
        return (

            <fieldset className="drag-and-drop">

                <legend className="visually-hidden"><span>Agregar archivo o arrastrarlo y soltarlo aquí</span></legend>
                <input
                    type="file"
                    name="file"
                    value={this.state.file}
                    id="file"
                    onChange={this.imageUpload}
                />

                <p> {this.state.isLoading ? 'isLoading' : 'not loading'} </p>
            </fieldset>

        )
    }
}


const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}
