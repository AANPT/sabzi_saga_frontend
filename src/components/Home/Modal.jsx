import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, // Set this to false if you want to hide the modal by default
    };
  }
  render() {
    const { handleClose } = this.props;
    let modalStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
    };
    let imgStyle = {
      width: "100%",
      height: "auto",
      maxWidth: "100%",
    };
    //   const { showModal } = this.state;
    return (
      <div className="modal show fade" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <img src={this.props.img} style={imgStyle} alt="" />
              <p>{this.props.desc}</p>
              <div>
                <p>Starting with: {this.props.price}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => alert("Buy Now clicked!")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
