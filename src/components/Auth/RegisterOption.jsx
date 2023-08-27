import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const RegisterOption = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItem: 'center',
            margin: "50px",
            gap: "160px",
        }}>
            <Card className='card custom-card' style={{ width: '18rem', height: '400px' }} >
                <Card.Img variant="top" src="https://images.pexels.com/photos/17837374/pexels-photo-17837374/free-photo-of-piles-of-ripe-tomatoes-of-different-colours.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-50 object-fit-cover' />
                <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faUser} />  User</Card.Title>
                    <Card.Text>
                        Users, Enjoy the seemless experience of this web application.
                    </Card.Text>
                    <Link to='/register/user'>
                        <Button variant="primary explore-btn">SignUp</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className='card custom-card' style={{ width: '18rem', height: '400px' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/16311013/pexels-photo-16311013/free-photo-of-night-photo-of-a-street-stall-with-chestnuts.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-50 object-fit-cover' />
                <Card.Body >
                    <Card.Title><FontAwesomeIcon icon={faUser} />  Vendor</Card.Title>
                    <Card.Text>
                        Vendor, Enjoy the seemless experience of this web application.
                    </Card.Text>
                    <Link to='/register/vendor'>
                        <Button variant="primary explore-btn">SignUp</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RegisterOption