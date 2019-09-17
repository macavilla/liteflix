import React, { Component } from "react";
import UserButton from "../img/user-icon.png"
import ArrowIcon from "../img/arrow.png"

import UserIcon from "../img/icon-user.png"
// import Bell from "../img/bell.png"

export default class UserPopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }

        this.handleClic = this.handleClic.bind(this)
    }



    handleClic() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {



        return (
            // <React.Fragment>
            <div className="pop-up-wrapper">

                <button
                    id="pop-up-trigger"
                    aria-haspopup="true"
                    aria-controls="pop-up-content"
                    aria-expanded={this.state.isOpen ? true : false}
                    onClick={this.handleClic}>
                    {// <div className="user-icon-wrapper">
                    }
                    <img src={UserButton} alt="Icono de usuario" />
                    {// </div>
                    }
                    <img src={ArrowIcon} alt="Icono de flecha hacia abajo" />
                </button>

                <div
                    role="menu"
                    aria-labelledby="pop-up-trigger"
                    id="pop-up-content"
                    className={this.state.isOpen ? 'open' : 'closed'}>
                    <ul className="user-list">
                        <li className="user active">
                            <div className="user-icon-wrapper">
                                <img src={UserIcon} alt="User icon" className="user-icon" />
                            </div>
                            {

                                // <span className="user-name">Ernesto Garmendia</span>
                            }

                            <span className="user-name">Ernesto G...</span>
                        </li>
                        <li className="user">
                            <div className="user-icon-wrapper">
                                <img src={UserIcon} alt="User icon" className="user-icon" />
                            </div>
                            <span className="user-name">User 03</span>
                        </li>
                        <li className="user">
                            <div className="user-icon-wrapper">
                                <img src={UserIcon} alt="User icon" className="user-icon" />
                            </div>
                            <span className="user-name">User 04</span>
                        </li>
                    </ul>

                    <ul className="navigation-items">
                        <li>Configuración</li>
                        <li>Ayuda</li>
                        <li>Log Out</li>
                    </ul>
                    
                </div>
            </div>

            // </React.Fragment>


        )
    }

}