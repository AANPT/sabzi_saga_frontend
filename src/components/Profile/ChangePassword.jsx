import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../redux/actions/profile';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async e => {
        e.preventDefault();
        await dispatch(changePassword(oldPassword, newPassword, confirmPassword));
        navigate('/profile');
    };

    const { loading, message, error } = useSelector(state => state.profile);
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
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <div className='form_container w-75 w-sm-50 m-5 p-5 ' style={{ boxShadow: "#c4fa6f  0px 3px 8px" }}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} className="mb-4" controlId="oldpass">
                            <Form.Label column sm='3'>
                                Old Password
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="Old Password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4" controlId="newpass">
                            <Form.Label column sm="3">
                                New Password
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4" controlId="confirmpass">
                            <Form.Label column sm="3">
                                Confirm New Password
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="New Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Button type="submit">
                            Change
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword