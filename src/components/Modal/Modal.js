//Modal component
//based on
//https://programmingwithmosh.com/javascript/create-modal-using-react/


import React, { Component } from "react"
import MovieTitle from "./MovieTitle";
import ModalTrigger from "./ModalTrigger";


class Modal extends Component {
    render() {
      return <ModalTrigger triggerText={this.props.modalProps.triggerText} /> ;
    }
  }
export default Modal