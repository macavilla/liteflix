//Modal component
//based on
//https://programmingwithmosh.com/javascript/create-modal-using-react/


import React, { Component } from "react"
import MovieTitle from "./MovieTitle";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }

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