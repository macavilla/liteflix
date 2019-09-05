import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Proximamente from "../components/Proximamente";
import Popular from "../components/Popular";



// let modalProps = {
//   triggerText: 'Launch the Modal!'
// };


export default () => (

  <div id="home" className="wrapper">
    <h1 className="visually-hidden">Inicio de LiteFlix</h1>


    <Nav />
    <header className="hero-wrapper">
      <Hero />
    </header>
    <Main />

  </div>
)
