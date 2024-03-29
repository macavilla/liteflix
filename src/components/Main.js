// listen to localStorage?
//https://stackoverflow.com/questions/43313372/how-to-listen-to-localstorage-in-react-js

import React, { Component } from "react";
import Proximamente from "./Proximamente";
import Popular from "./Popular";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moviesListed: {},
        }
    }




    render() {
        return (
            <main className="inner-wrapper">
                <section className="proximamente-wrapper">
                    <h2>Proximamente</h2>
                    <div className="flex-wrapper">
                        <Proximamente index={0} />
                        <Proximamente index={1} />
                        <Proximamente index={2} />
                        <Proximamente index={3} />
                    </div>


                </section>
                <section className="populares-wrapper">
                    <h2>POPULARES  DE LITEFLIX</h2>
                    <div className="flex-wrapper">
                        <Popular index={0} />
                        <Popular index={1} />
                        <Popular index={2} />
                        <Popular index={3} />
                    </div>


                </section>
            </main>
        )
    }
}

export default Main