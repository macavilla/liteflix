//import Button add -> que muestra el Modal
import React, { Component } from "react";

import Logo from "../img/liteflix-logo.png"
import Modal from "./Modal/Modal";



class Nav extends Component {
    constructor(props){
        super(props);
        this.state ={
            triggerText: 'sarasa!'
        }
        // let modalProps = {
        //     triggerText: 'Launch the Modal!'
        //   };
    }

    render(){

        return (
            <nav>
    
                <a href="#"><img src={Logo} alt="Liteflix Logo" /></a>
                <div className="nav-wrapper mobile"></div>
                <div className="nav-wrapper">
                    <Modal modalProps={this.state.triggerText}  />
                </div>
            </nav>
    
    
    
        )
    }
}

export default Nav;
