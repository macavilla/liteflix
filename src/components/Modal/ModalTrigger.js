//Button add -> que muestra el Modal
import React, { Component } from "react";

import Icon from "../Icon"


class ModalTrigger extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button 
            ref={this.props.buttonRef}
            onClick={this.props.showModal}
            className="modal-button">
                <Icon icon="add" />
                <span>{this.props.triggerText}</span>
            </button>
        );
    }
}



export default ModalTrigger