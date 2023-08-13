import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'

const ChangePassword = () => {
    return (
        <>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <div className='form_container w-75 w-sm-50 m-5 p-5 ' style={{ boxShadow: "#c4fa6f  0px 3px 8px" }}>
                    <Form>
                        <Form.Group as={Row} className="mb-4" controlId="oldpass">
                            <Form.Label column sm='3'>
                                Old Password
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="Old Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4" controlId="newpass">
                            <Form.Label column sm="3">
                                New Password
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="New Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4" controlId="confirmpass">
                            <Form.Label column sm="3">
                                Confirm New Password
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="New Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword