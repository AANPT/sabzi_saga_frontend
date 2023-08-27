
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ResetStyle.css'; // Make sure to have a ResetStyle.css for styling
import Footer from '../Layout/Footer/Footer';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';


const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, message, error } = useSelector(state => state.profile);



    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const [passwordMatchError, setPasswordMatchError] = useState('');

    const validatePassword = () => {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        const passwordValid = passwordPattern.test(password);

        setPasswordError('');
        return passwordValid;
    };

    // const validatePasswordMatch = () => {
    //     if (password !== confirmPassword) {
    //         setPasswordMatchError("Passwords don't match");
    //         return false;
    //     }
    //     setPasswordMatchError('');
    //     return true;
    // };

    const submitHandler = (e) => {
        e.preventDefault();


        if (validatePassword()) {
            dispatch(resetPassword(params.token, password, confirmPassword));
            // setStep(3);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            navigate('/login');
        }
    }, [dispatch, error, message, navigate]);

    return (
        <>
            <Container className="reset-password-container">
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <h2 className="reset-password-title" style={{ textAlign: 'center', fontSize: '30px' }}>Reset Password</h2>
                        <div className="bouncing-smiley">😊</div>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="password" className="form-group">
                                <Form.Control
                                    type="password"
                                    placeholder=" "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={validatePassword}
                                    className={`form-control ${passwordError ? 'password-invalid' : ''}`}
                                    required
                                />
                                <Form.Label className={`form-label ${password ? 'float-label' : ''}`}>New Password</Form.Label>
                                {password && (
                                    <div className="password-rules">
                                        <ul>
                                            <li className={password.match(/[a-z]/) ? 'valid' : ''}>
                                                Contains at least one lowercase letter
                                            </li>
                                            <li className={password.match(/[A-Z]/) ? 'valid' : ''}>
                                                Contains at least one uppercase letter
                                            </li>
                                            <li className={password.match(/\d/) ? 'valid' : ''}>
                                                Contains at least one digit
                                            </li>
                                            <li className={password.match(/[@#$%^&+=]/) ? 'valid' : ''}>
                                                Contains at least one special character
                                            </li>
                                            <li className={password.length >= 8 ? 'valid' : ''}>
                                                Is at least 8 characters long
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group controlId="confirmPassword" className="form-group">
                                <Form.Control
                                    type="password"
                                    placeholder=" "
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    // onBlur={validatePasswordMatch}
                                    // className={`form-control ${passwordMatchError ? 'password-invalid' : ''}`}
                                    required
                                />
                                <Form.Label className={`form-label ${confirmPassword ? 'float-label' : ''}`}>Confirm Password</Form.Label>
                            </Form.Group>
                            <div className="button-container">
                                <Button variant="primary" type="submit" className="btn-small btn-transition">
                                    Update Password
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ResetPassword;



