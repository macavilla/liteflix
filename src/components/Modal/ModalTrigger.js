//Button add -> que muestra el Modal
import React, { Component } from "react";

import Icon from "../Icon"


class ModalTrigger extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <button 
            // style={{width: '50px', height: '50px', background: 'white'}} 
            // onClick={this.props.showModal} 
            // className="modal-button"
            // >
            //     <Icon icon="add" />
            //     <span>
            //     {this.props.triggerText}
            //     </span>
            // </button>

            <button onClick={this.props.showModal} className="modal-button">
                <Icon icon="add" />
                <span>{this.props.triggerText}</span>
            </button>
        );
    }
}



export default ModalTrigger