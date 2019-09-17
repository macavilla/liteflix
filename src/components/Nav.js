//import Button add -> que muestra el Modal
import React, { Component } from "react";

import Logo from "../img/liteflix-logo.png"
import Modal from "./Modal";
import UserPopUp from "./PopUpUser";



class Nav extends Component {
  // constructor(props) {
  //   super(props);

  // }


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

  render() {

    return (
      <nav>

        <div className="nav-wrapper mobile">
          Mobile</div>
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
