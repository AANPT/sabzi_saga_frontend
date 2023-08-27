import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { contactUs, feedback } from '../../redux/actions/other';
import Button from 'react-bootstrap//Button';

const Feedback = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const {
        loading,
        error,
        message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(feedback(email, subject, description));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (stateMessage) {
            toast.success(stateMessage);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, stateMessage]);

    return (
        <>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <h2 className='mt-5 '>Feedback</h2>
                <div className='form_container w-75 w-sm-50 m-3 p-3 m-md-5 p-md-5 ' style={{ boxShadow: "#c4fa6f  0px 3px 8px" }}>
                    <Form onSubmit={submitHandler}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subject"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Desciption">
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                style={{ height: '100px' }}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </FloatingLabel>
                        <Button type="submit">
                            submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Feedback