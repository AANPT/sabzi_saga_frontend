// src/components/ForgotPassword.js
// ... (imports)
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Don't forget to import useState
// import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Import the required components from react-bootstrap
import './ForgetStyle.css';
import { Form, Button } from 'react-bootstrap';
import Footer from '../Layout/Footer/Footer'
import { forgotPassword } from '../../redux/actions/profile';

import Img from '../../assets/images/ForgetPass.jpg';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    // const [emailError, setEmailError] = useState('');

    const { loading, message, error } = useSelector(state => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(forgotPassword(email));
        // if (validateEmail()) {
        //     setStep(2);
        // }

    };

    const handleCancel = () => {
        navigate('/profile');
    };


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);

    return (
        <>
            <div className="container-wrapper">
                <img src={Img} alt="Lock Icon" className="lock-icon" />
                <div className="container-box">
                    <h2 style={{ color: '#052a2a' }}>Forgot Password</h2>
                    <div className="sad-smiley">😔</div>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="email" className="form-group">
                            <Form.Control
                                type="email"
                                // placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // onBlur={validateEmail}
                                // isInvalid={emailError}
                                required
                                className="input"
                            />
                            <Form.Label className="label">Email address</Form.Label>
                            {/* <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback> */}
                        </Form.Group>
                        <div className="button-container">
                            <Button variant="secondary" className="btn-small btn-transition" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit" className="btn-small btn-transition">
                                Send Reset Link
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ForgotPassword;
