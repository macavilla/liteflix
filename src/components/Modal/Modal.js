//Modal component
//based on
//https://programmingwithmosh.com/javascript/create-modal-using-react/


import React, { Component } from "react"
import MovieTitle from "./MovieTitle";
import ModalTrigger from "./ModalTrigger";


class Modal extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: [],
    //   isLoaded: false,
    //   isLiked: false
    // }
  }

    render() {
      console.log('====================================');
      console.log(this.props.modalProps);
      console.log('====================================');
      return(
        <aside>
        <p>  </p>
        <ModalTrigger triggerText={this.props.modalProps} />
        </aside>
      ) 
    }
  }
export default Modal