import React, { Fragment, useState } from "react";
import Sidebar from "../Sidebar";

const initialData = [
  {
    id: 1,
    storeName: "Store A",
    image:
      "https://images.pexels.com/photos/2611818/pexels-photo-2611818.jpeg?auto=compress&cs=tinysrgb&w=600",
    quantity: 150,
    orderPlaced: 75,
  },
  {
    id: 2,
    storeName: "Store B",
    image:
      "https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&w=600",
    quantity: 200,
    orderPlaced: 120,
  },
  {
    id: 3,
    storeName: "Store C",
    image:
      "https://images.pexels.com/photos/1118177/pexels-photo-1118177.jpeg?auto=compress&cs=tinysrgb&w=600",
    quantity: 150,
    orderPlaced: 75,
  },
];

function ItemList() {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //   const [showForm, setShowForm] = useState(false);
  //   const [editFormVisible, setEditFormVisible] = useState(false);
  //   const [formData, setFormData] = useState(initialFormData);
  //   const [currentEditStore, setCurrentEditStore] = useState(null);
  const [storeRows, setStoreRows] = useState(initialData);

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit item with id:", id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log("Delete item with id:", id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <h2>Item List</h2>
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={`Item ${item.id}`}
                  style={{ width: "80px", height: "80px", marginRight: "20px" }}
                />
                <div>
                  <h5>{item.storeName}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p>Order Placed: {item.orderPlaced}</p>
                  <div>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* //pagnation */}
        <div className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
              <button
                className="page-link"
                style={{
                  backgroundColor: "#052A2A",
                  color: "#d9edc4",
                  fontSize: "20px",
                }}
                onClick={() => handleChangePage(null, page - 1)}
              >
                Previous
              </button>
            </li>
            <li
              className={`page-item ${
                page >= Math.ceil(data.length / rowsPerPage) - 1
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                style={{
                  backgroundColor: "#052A2A",
                  color: "#d9edc4",
                  fontSize: "20px",
                }}
                onClick={() => handleChangePage(null, page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ItemList;
