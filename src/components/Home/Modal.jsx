// import React, { Component } from "react";
// import { connect } from "react-redux";

// export default class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showModal: false, // Set this to false if you want to hide the modal by default
//     };
//     this.addToCartHandler = this.addToCartHandler.bind(this);
//   }
//   addToCartHandler(itemId) {
//     // Dispatch the Redux action here
//     this.props.addToCart(itemId);
//   }
//   render() {
//     const { handleClose } = this.props;
//     let modalStyle = {
//       display: "block",
//       backgroundColor: "rgba(0,0,0,0.8)",
//     };
//     let imgStyle = {
//       width: "100%",
//       height: "250px",
//       maxWidth: "100%",
//     };
//     //   const { showModal } = this.state;
//     return (
//       <div className="modal show fade" style={modalStyle}>
//         <div className="modal-dialog" style={{ height: '550px' }}>
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">{this.props.title}</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={handleClose}
//               ></button>
//             </div>
//             <div className="modal-body">
//               <img src={this.props.img} style={imgStyle} alt="" />
//               <p>{this.props.desc}</p>
//               <div>
//                 <p>Starting with: {this.props.price}</p>
//               </div>
//               <button
//                 className="btn explore-btn btn-primary"
//                 onClick={() => this.addToCartHandler(this.props.id)}
//               >
//                 add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user.js";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  async addToCartHandler(itemId) {
    // Dispatch the Redux action here
    await this.props.addToCart(itemId);
    this.props.loadUser();
  }

  render() {
    const { handleClose } = this.props;
    let modalStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
    };
    let imgStyle = {
      width: "100%",
      height: "250px",
      maxWidth: "100%",
    };

    return (
      <div className="modal show fade" style={modalStyle}>
        <div className="modal-dialog" style={{ height: '550px' }}>
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
                className="btn explore-btn btn-primary"
                onClick={() => this.addToCartHandler(this.props.id)}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (itemId) => dispatch(addToCart(itemId)),
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(null, mapDispatchToProps)(Modal);
