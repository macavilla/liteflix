//https://jsfiddle.net/5pu1brag/

// https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page

import React, { Component } from 'react';



export default class Form extends Component {
    state = {
        isLoading: false,
        progress: 0,
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

        // while (this.state.isLoading) {

        //     return (

        //         <fieldset className={"drag-and-drop" + this.state.error ? 'error' : this.state.success ? 'success' : ''}>
        //             <p className="message">
        //                 {this.state.error ? 'Error! No se pudo cargar la película'
        //                     : this.state.success ? '100% Cargado' :
        //                         'Cargando ' + this.state.progress + '%'
        //                 }
        //             </p>
        //             <progress max="100" value={this.state.error ? 100
        //                 : this.state.success ? 100 : this.state.progress
        //             }
        //             ></progress>
        //         </fieldset>
        //     )

        // }
        // return (

        //     <fieldset className="drag-and-drop">




        //         <legend className="visually-hidden"><span>Agregar archivo o arrastrarlo y soltarlo aquí</span></legend>
        //         <input
        //             type="file"
        //             name="file"
        //             value={this.state.file}
        //             id="file"
        //             onChange={this.imageUpload}
        //         />

        //         <p> {this.state.isLoading ? 'isLoading' : ''} </p>
        //     </fieldset>

        // )

        return (

            <fieldset className={"drag-and-drop" + this.state.error ? 'error' : this.state.success ? 'success' : this.state.isLoading ? 'loading' : ''}>
                <legend className="visually-hidden"><span>Agregar archivo o arrastrarlo y soltarlo aquí</span></legend>
                <input
                    type="file"
                    name="file"
                    value={this.state.file}
                    id="file"
                    onChange={this.imageUpload}
                    className={!this.state.isLoading ? '' : 'visually-hidden'}
                />

                <p className="message">
                    {this.state.error ? 'Error! No se pudo cargar la película'
                        : this.state.success ? '100% Cargado'
                            : ''}
                </p>
                <progress max="100" value={this.state.error ? 100
                    : this.state.success ? 100 : this.state.progress
                }
                ></progress>
            </fieldset>
        )
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
