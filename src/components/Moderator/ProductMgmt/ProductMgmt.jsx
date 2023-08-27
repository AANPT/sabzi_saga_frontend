import React, { useState } from "react";
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createProduct, deleteProduct } from "../../../redux/actions/vendor";
import { getShopProducts } from "../../../redux/actions/product";
import { toast } from "react-hot-toast";
import { loadShop } from "../../../redux/actions/shop";

function ProductMgmt() {
    const options = ["vegetable", "fruit"];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showForm, setShowForm] = useState(false); // Toggle form display
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [image, setImage] = useState('');
    const [selected, setSelected] = useState(options[0]);


    const dispatch = useDispatch();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const { shops } = useSelector(state => state.shop);
    const shop = shops[0];

    const handleAddProduct = () => {
        setShowForm(true);
    };

    const submitHandler = e => {

        e.preventDefault();

        const shopId = shop._id;
        const ProductForm = new FormData();
        ProductForm.append('shopId', shopId);
        ProductForm.append('name', productName);
        ProductForm.append('description', productDesc);
        ProductForm.append('price', price);
        ProductForm.append('quantity', productQuantity);
        ProductForm.append('category', selected);
        ProductForm.append('file', image);
        dispatch(createProduct(ProductForm));
    }

    const { products, error, message } = useSelector(
        state => state.product
    );

    const { user } = useSelector(
        state => state.user
    );

    const deleteProductHandler = id => {
        dispatch(deleteProduct(id));
    }

    useEffect(() => {

        if (user && user.email) {
            const email = user.email;
            dispatch(loadShop(email));
        }


    }, [dispatch, user]);


    useEffect(() => {

        if (shop)
            dispatch(getShopProducts(shop._id));

        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, user, shop, error, message])

    return (
        < div className="d-flex justify-content-start">
            < Sidebar />
            <div className="container mt-4">
                <div className="d-flex justify-content-between mb-3">
                    <h5 style={{ color: "#052A2A", fontSize: "35px" }}>
                        {" "}
                        <b>Product List</b>{" "}
                    </h5>
                    <button
                        className="btn btn-lg"
                        style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}
                        onClick={handleAddProduct}
                    >
                        Add Product
                    </button>
                </div>
                {showForm ? (
                    <form className="mb-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label
                                htmlFor="Product"
                                className="form-label"
                                style={{ color: "#052A2A" }}
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="Product"
                                name="Product"
                                value={productName}
                                onChange={e => setProductName(e.target.value)}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="Price"
                                className="form-label"
                                style={{ color: "#052A2A" }}
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="Price"
                                name="Price"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="Desc"
                                className="form-label"
                                style={{ color: "#052A2A" }}
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="Desc"
                                name="Desc"
                                value={productDesc}
                                onChange={e => setProductDesc(e.target.value)}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="Product-Quntity"
                                className="form-label"
                                style={{ color: "#052A2A" }}
                            >
                                Products Quanitity in {'(kg)'}
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="Product-Quntity"
                                name="Product-Quntity"
                                value={productQuantity}
                                onChange={e => setProductQuantity(e.target.value)}
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label" style={{ color: "#052A2A" }}>Select Category</label>
                            <select style={{
                                borderStyle: "solid",
                                borderWidth: "3px",
                                borderColor: "#c4fa6f",
                            }}
                                value={selected} id="category" className="form-control"
                                onChange={(e) => setSelected(e.target.value)}>
                                {options.map((value) => (
                                    <option value={value} key={value} className="form-control" >
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="ProductImage"
                                className="form-label"
                                style={{ color: "#052A2A" }}
                            >
                                Product Image
                            </label>
                            <input
                                type="file" accept="image/*"
                                id='ProductImage'
                                placeholder="Product Image"
                                className="form-control"
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: "3px",
                                    borderColor: "#c4fa6f",
                                }}
                                onChange={e => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            {/* <Link to="/vendor/productmgmt"> */}
                            <button
                                type="submit"
                                className="btn btn-lg"
                                style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}
                            // onClick={e => setShowForm(!showForm)}

                            >
                                Add
                            </button>
                            {/* </Link> */}
                            <button className="btn btn-lg" onClick={e => setShowForm(!showForm)} style={{ backgroundColor: "#052A2A", color: "#d9edc4" }}>Cancel</button>
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
                                {products
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <tr key={index}>
                                            {columns.map((column) => {
                                                if (column.id === "serial") {
                                                    return (
                                                        <td key={column.id}>{index + 1}</td>
                                                    );
                                                }
                                                const value = row[column.id];
                                                if (column.id === "action") {
                                                    return (
                                                        <td key={column.id}>
                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                style={{
                                                                    backgroundColor: "#052A2A",
                                                                    color: "#d9edc4",
                                                                    borderColor: "#c4fa6f",
                                                                }}
                                                                onClick={() => deleteProductHandler(row._id)}
                                                            >
                                                                Delete
                                                            </button>
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
                                    className={`page-item ${page >= Math.ceil(products.length / rowsPerPage) - 1
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
                )}
            </div>


        </div>
    );
}

export default ProductMgmt;





const columns = [
    { id: "serial", label: "S.no." },
    { id: "name", label: "Product" },
    { id: "description", label: "Desciption" },
    { id: "price", label: "Price" },
    { id: "category", label: "Category" },
    { id: "quantity", label: "Quantity" },
    { id: "action", label: "Action" },
];
