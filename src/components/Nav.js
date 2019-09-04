//import Button add -> que muestra el Modal
import React, { Component } from "react";

import Logo from "../img/liteflix-logo.png"
import Modal from "./Modal/Modal";



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            triggerText: 'Agregar película'
        }
        // let modalProps = {
        //     triggerText: 'Launch the Modal!'
        //   };
    }

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
                        <li>Inicio</li>
                        <li>Series</li>
                        <li>Peliculas</li>
                        <li>Agregados recientemente</li>
                        <li>Mi lista</li>
                        <li>
                            <Modal modalProps={this.state.triggerText} />
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
