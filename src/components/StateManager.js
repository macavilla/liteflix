import React, { Component } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";


export default class StateManager extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id="home" className="wrapper">
                <h1 className="visually-hidden">Inicio de LiteFlix</h1>


                <Nav />
                <Hero />
                <Main />

            </div>


        )
    }
}

// export default () => (

//   <div id="home" className="wrapper">
//     <h1 className="visually-hidden">Inicio de LiteFlix</h1>


//     <Nav />
//     <Hero />
//     {
//     // <header className="hero-wrapper">
//     // </header>
//   }
//     <Main />

//   </div>
// )
