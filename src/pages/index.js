import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Proximamente from "../components/Proximamente";

export default () => (



  <div id="home" className="wrapper">
    <h1 className="visually-hidden">Inicio de LiteFlix</h1>

    <Nav />
    <header className="hero-wrapper">
      <Hero />

    </header>
    <main className="inner-wrapper">
      <Proximamente />
    </main>

  </div>
)
