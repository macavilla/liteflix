//import Button add -> que muestra el Modal
import React, { Component } from "react";

import Logo from "../img/liteflix-logo.png"
import Modal from "./Modal/Modal";
import Icon from "./Icon"



class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleMenuTrigger = this.handleMenuTrigger.bind(this);
  }


  modalProps = {
    triggerText: "Agregar película"
  };
  modalContent = (
    <React.Fragment>
      <p>
        Press <code>Esc</code> or click Outside the Modal to exit.
      </p>
      <p>
        Pressing Return also exits the Modal if you haven't changed the focus!
      </p>
    </React.Fragment>
  );

  handleMenuTrigger() {
    console.log('CLICK');
    
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {

    return (
      <nav>

        <div className="nav-wrapper mobile">
          <button id="menu-trigger" className="" onClick={this.handleMenuTrigger} aria-label="Open the navigation menu">
            <Icon icon="menu" aria-hidden="true"/>
          </button>

          <div className={this.state.isToggleOn ? 'nav-content open' : 'nav-content closed'}>
            <div className="user"></div>
          </div>

        </div>
        <div className="nav-wrapper desktop">
          <ul className="navigation-items left">
            <li>
              <a href="#"><img src={Logo} alt="Liteflix Logo" /></a>
            </li>
            <li className="bold">Inicio</li>
            <li>Series</li>
            <li>Peliculas</li>
            <li>Agregados recientemente</li>
            <li>Mi lista</li>
            <li>
              <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
            </li>
          </ul>

          <ul className="navigation-items right">
            <li>Niños</li>
            <li>Bell</li>
            <li>User Dropdows</li>
          </ul>
        </div>
      </nav>



    )
  }
}

export default Nav;
