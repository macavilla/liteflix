import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";



// let modalProps = {
//   triggerText: 'Launch the Modal!'
// };


export default () => (

  <div id="home" className="wrapper">
    <h1 className="visually-hidden">Inicio de LiteFlix</h1>


    <Nav />
    <Hero />
    {
    // <header className="hero-wrapper">
    // </header>
  }
    <Main />

  </div>
)
