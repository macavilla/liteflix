//Modal component
//based on
//https://programmingwithmosh.com/javascript/create-modal-using-react/

import React, { Component } from 'react';
import ModalContent from './ModalContent';
import ModalTrigger from './ModalTrigger';

<<<<<<< HEAD

export class Modal extends Component {
  constructor() {
    super();
=======
import React, { Component } from "react"
import MovieTitle from "./MovieTitle";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";


class Modal extends Component {
  constructor(props) {
    super(props);
>>>>>>> 1c825a9e0ca0b34992b5488e2cfa8cc53555ea8d
    this.state = {
      isShown: false
    };
  }
<<<<<<< HEAD
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };
  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = event => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  
  render() {

    return (
      <React.Fragment>
        <ModalTrigger
          showModal={this.showModal}
          buttonRef={n => (this.TriggerButton = n)}
          triggerText={this.props.modalProps.triggerText}
        />
        {this.state.isShown ? (
          <ModalContent
            modalRef={n => (this.modal = n)}
            buttonRef={n => (this.closeButton = n)}
            closeModal={this.closeModal}
            content={this.props.modalContent}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
=======

  render() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    return (


      <React.Fragment>
        <ModalTrigger
          showModal={this.showModal}
          triggerText={this.props.modalProps}
        />

        {this.state.isShown ? <ModalContent /> : <React.Fragment />}

      </React.Fragment>
    )
  }
}
export default Modal
>>>>>>> 1c825a9e0ca0b34992b5488e2cfa8cc53555ea8d
