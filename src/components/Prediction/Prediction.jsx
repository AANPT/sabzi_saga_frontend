// import React from "react";
// import Table from 'react-bootstrap/Table';
// import { PredictionData } from "../../Data.js";
// const Prediction = () => {
//   return <>

//     <Table responsive="sm" className="m-2 p-2 m-md-5 p-md-5 text-center align-middle">
//       <thead>
//         <tr>
//           <th>S.no.</th>
//           <th>Product Image</th>
//           <th>Name</th>
//           <th>Current Price</th>
//           <th>Future Price</th>
//         </tr>
//       </thead>
//       <tbody >
//         {PredictionData.map((product, key) => {
//           return (
//             <tr key={key} >
//               <td>{key + 1}</td>
//               <td> <img src={product.imgsrc} className="rounded-5" style={{ height: "80px", width: "80px" }} alt="" /></td>
//               <td>{product.name}</td>
//               <td>Rs. {product.currentPrice}</td>
//               <td>Rs. {product.futurePrice}</td>
//             </tr>
//           )
//         })};
//       </tbody>
//     </Table>
//   </>;
// };

// export default Prediction;

import React from "react";
import Table from 'react-bootstrap/Table';
import { PredictionData } from "../../Data.js";
import './Prediction.css'; // Make sure to include your CSS file for styling

const Prediction = () => {
  return (
    <div className="prediction-page">
      <h1 className="page-title">Product Predictions</h1>

      <Table responsive className="prediction-table">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Product Image</th>
            <th>Name</th>
            <th>Current Price</th>
            <th>Future Price</th>
          </tr>
        </thead>
        <tbody>
          {PredictionData.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={product.imgsrc}
                  className="product-image"
                  alt={product.name}
                />
              </td>
              <td>{product.name}</td>
              <td>Rs. {product.currentPrice}</td>
              <td>Rs. {product.futurePrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Prediction;