import React, { useState } from 'react'
import Sidebar from '../../Moderator/Sidebar';

const StoreMgmt = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showForm, setShowForm] = useState(false); // Toggle form display
    const [formData, setFormData] = useState({
        storeName: '',
        location: '',
        productsCount: 0,
        ordersCount: 0,
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAddStore = () => {
        setShowForm(true);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Form data:', formData);
        setShowForm(false);
        setFormData({
            storeName: '',
            location: '',
            productsCount: 0,
            ordersCount: 0,
        });
    };
    return (
        < div className="d-flex justify-content-start">
            < Sidebar />
            <div className="container mt-4">
                <div className="d-flex justify-content-between mb-3">
                    <h5 style={{ color: "#052A2A", fontSize: "35px" }}> <b>Stores List</b> </h5>
                    <button className="btn btn-lg" style={{ backgroundColor: "#052A2A", color: "#d9edc4" }} onClick={handleAddStore}>
                        Add Store
                    </button>
                </div>
                {showForm ? (
                    <form className="mb-3" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="storeName" className="form-label" style={{ color: "#052A2A" }}>
                                Store Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="storeName"
                                name="storeName"
                                value={formData.storeName}
                                onChange={handleFormChange}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label" style={{ color: "#052A2A" }}>
                                Location
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleFormChange}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productsCount" className="form-label" style={{ color: "#052A2A" }}>
                                Products Count
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="productsCount"
                                name="productsCount"
                                value={formData.productsCount}
                                onChange={handleFormChange}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ordersCount" className="form-label" style={{ color: "#052A2A" }}>
                                Orders Count
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="ordersCount"
                                name="ordersCount"
                                value={formData.ordersCount}
                                onChange={handleFormChange}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-lg" style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}>
                                Add
                            </button>
                        </div>

                    </form>
                ) : (
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column.id}>{column.label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <tr key={row.storeId}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                if (column.id === 'action') {
                                                    return (
                                                        <td key={column.id}>
                                                            <button className="btn btn-primary btn-sm me-2" style={{ backgroundColor: "#052A2A", color: "#d9edc4", borderColor: "#c4fa6f" }} onClick={() => console.log(`Edit store ${row.storeId}`)}>Edit</button>
                                                            <button className="btn btn-danger btn-sm" style={{ backgroundColor: "#052A2A", color: "#d9edc4", borderColor: "#c4fa6f" }} onClick={() => console.log(`Delete store ${row.storeId}`)}>Delete</button>
                                                        </td>
                                                    );
                                                }
                                                return <td key={column.id}>{value}</td>;
                                            })}
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center mt-3">
                            <ul className="pagination">
                                <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                                    <button className="page-link" style={{ backgroundColor: "#052A2A", color: "#d9edc4", fontSize: "20px", }} onClick={() => handleChangePage(null, page - 1)}>Previous</button>
                                </li>
                                <li className={`page-item ${page >= Math.ceil(rows.length / rowsPerPage) - 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" style={{ backgroundColor: "#052A2A", color: "#d9edc4", fontSize: "20px", }} onClick={() => handleChangePage(null, page + 1)}>Next</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StoreMgmt;



const columns = [
    { id: 'storeId', label: 'Store ID' },
    { id: 'storeName', label: 'Store Name' },
    { id: 'location', label: 'Location' },
    { id: 'productsCount', label: 'Products Count' },
    { id: 'ordersCount', label: 'Orders Count' },
    { id: 'action', label: 'Action' },
];

const rows = [
    { storeId: 1, storeName: 'Store A', location: 'New York', productsCount: 150, ordersCount: 75 },
    { storeId: 2, storeName: 'Store B', location: 'Los Angeles', productsCount: 200, ordersCount: 120 },
    { storeId: 3, storeName: 'Store C', location: 'Chicago', productsCount: 100, ordersCount: 50 },
    { storeId: 4, storeName: 'Store D', location: 'Delhi', productsCount: 150, ordersCount: 75 },
    { storeId: 5, storeName: 'Store E', location: 'Mumbai', productsCount: 200, ordersCount: 120 },
    { storeId: 6, storeName: 'Store F', location: 'Kolkata', productsCount: 100, ordersCount: 50 },
    { storeId: 7, storeName: 'Store G', location: 'Dehradun', productsCount: 150, ordersCount: 75 },
    { storeId: 8, storeName: 'Store H', location: 'Chennai', productsCount: 200, ordersCount: 120 },
    { storeId: 9, storeName: 'Store I', location: 'Hyderabad', productsCount: 100, ordersCount: 50 },
    { storeId: 10, storeName: 'Store J', location: 'Bengalore', productsCount: 150, ordersCount: 75 },
    { storeId: 11, storeName: 'Store K', location: 'Noida', productsCount: 200, ordersCount: 120 },
    { storeId: 12, storeName: 'Store L', location: 'Gurugram', productsCount: 100, ordersCount: 50 },
];