//import Button add -> que muestra el Modal
import React, { Component } from "react";

import Logo from "../img/liteflix-logo.png"
import UserIcon from "../img/icon-user.png"
import Bell from "../img/bell.png"

import Modal from "./Modal";
import Icon from "./Icon"
import UserPopUp from "./PopUpUser";



class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };

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
    const { isToggleOn } = this.state;

    return (
      <nav>
        {
          /*Nav mobile*/
        }
        <div className={isToggleOn ? "nav-wrapper mobile open" : "nav-wrapper mobile"}>
          <button id="menu-trigger"
            className=""
            onClick={this.handleMenuTrigger}
            aria-controls="nav-content"
            aria-haspopup="true"
            aria-expanded={isToggleOn ? true : false}
            aria-label="Open the navigation menu">
            <Icon icon="menu" aria-hidden="true" />
          </button>

          <div id="nav-content"
            role="menu"
            className={isToggleOn ? 'open' : 'closed'}
            aria-label="Menu"
          >
            <div className="user">
              <div className="user-icon-wrapper">
                <img src={UserIcon} alt="User icon" className="user-icon" />
              </div>
              <span className="user-name">Ernesto Garmendia</span>
            </div>

            <ul className="navigation-items">
              <li role="menuitem">Cambiar Usuario</li>
              <li role="menuitem">Configuración</li>
              <li role="menuitem">Ayuda</li>
            </ul>

            <ul className="navigation-items">
              <li role="menuitem"> <img src={Bell} alt="Notification icon" /> Novedades</li>
              <li role="menuitem">Series</li>
              <li role="menuitem">Películas</li>
              <li role="menuitem">Mi lista</li>
              <li role="menuitem">Niños</li>
            </ul>

            <Modal modalProps={this.modalProps} modalContent={this.modalContent} />

            <ul className="navigation-items">
              <li role="menuitem">Log Out</li>
            </ul>
          </div>

        </div>

        {
          /* Nav Desktop*/
        }

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
            <li>
              <UserPopUp />
            </li>
          </ul>
        </div>
      </nav>



    )
  }
}

export default Nav;
