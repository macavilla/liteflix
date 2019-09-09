//https://jsfiddle.net/5pu1brag/

// https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page

import React, { Component } from 'react';
import Icon from "../Icon"



export default class DragAndDrop extends Component {
    state = {
        isLoading: true,
        progress: 20,
        error: false,
        success: false,
        file: ''
    };


    imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file)
            .then(base64 => {
                this.setState({ isLoading: true, progress: 40 });
                console.log("isLoading", this.state.isLoading);
                console.log("progress", this.state.progress);

                localStorage["fileBase64"] = base64;
                console.log("file stored", base64);
            })
            .then(
                this.setState({
                    isLoading: false,
                    progress: 100,
                    success: true
                })
            )

    };

    render() {

        if (this.state.isLoading) {

            return (
                <fieldset id="drag-and-drop" className={this.state.error ? ' error ' : this.state.success ? ' success ' : ' loading '}>

                    <p className="message">
                        {
                            this.state.error ? 'Error! No se pudo cargar la película' :
                                this.state.success ? '100% Cargado' :
                                    this.state.isLoading ? 'Cargando ' + this.state.progress : ''
                        }
                    </p>
                    <progress className={!this.state.isLoading ? 'visually-hidden' : ''} max="100" value={
                        this.state.error ? 100 :
                            this.state.success ? 100 :
                                this.state.progress
                    }
                    ></progress>

                    <button className={this.state.success ? 'visually-hidden' : ''}>
                        {
                            this.state.error ? 'REINTENTAR' :
                                this.state.isLoading ? 'CANCELAR' : ''
                        }
                    </button>
                </fieldset>
            )

        } else {
            return (
                <div id="drag-and-drop" className="fieldset">
                    <legend className="visually-hidden"><span>Agregar archivo o arrastrarlo y soltarlo aquí</span></legend>
                    <div className="field">
                        <label for="file" className={this.state.isLoading || this.state.error || this.state.success ? 'visually-hidden' : 'label-file'}>
                            <Icon icon="clip"></Icon>
                            <span>
                                <span className="blue">Agregar archivo </span>o arrastrarlo y soltarlo aquí
                                    </span>
                            <input
                                type="file"
                                name="file"
                                value={this.state.file}
                                id="file"
                                onChange={this.imageUpload}
                                className="visually-hidden"
                            />
                        </label>
                    </div>
                </div>
            )

        }
    }
}


const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => { reject(error); this.setState({ isLoading: false, error: true }); }
        reader.readAsDataURL(file);
    });
}
