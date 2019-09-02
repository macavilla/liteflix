import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Proximamente from "../components/Proximamente";
import Popular from "../components/Popular";

export default () => (



  <div id="home" className="wrapper">
    <h1 className="visually-hidden">Inicio de LiteFlix</h1>

    <Nav />
    <header className="hero-wrapper">
      <Hero />
    </header>
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
        <h2>Populares  de Liteflix</h2>
        <div className="flex-wrapper">
          <Popular index={0} />
          <Popular index={1} />
          <Popular index={2} />
          <Popular index={3} />
        </div>


      </section>
    </main>

  </div>
)
