import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Feedback = () => {
    return (
        <>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <h2 className='mt-5 '>Feedback</h2>
                <div className='form_container w-75 w-sm-50 m-3 p-3 m-md-5 p-md-5 ' style={{ boxShadow: "#c4fa6f  0px 3px 8px" }}>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subject"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Subject" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Desciption">
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Feedback;