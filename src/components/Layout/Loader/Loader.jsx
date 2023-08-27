import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <div className="center-container d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-flex align-items-center">
                <Spinner animation="grow" variant="success" style={{ width: "4rem", height: "4rem", margin: "0 10px" }} />
                <Spinner animation="grow" variant="success" style={{ width: "4rem", height: "4rem" }} />
            </div>
        </div>
    )
}

export default Loader