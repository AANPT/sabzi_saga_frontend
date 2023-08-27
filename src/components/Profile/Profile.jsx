import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Profile.css'; // Import your custom CSS for styling

const Profile = () => {
  const { user } = useSelector(state => state.user);

  return (
    <>

      {!user ? (
        <div>loading.....</div>
      ) : (
        <>
          <section className="profile">
            <Container>
              <Row className="profile-header">
                <Col md={4} className="profile-image">
                  <Image
                    src={user.avatar.url}
                    roundedCircle
                    style={{ height: "350px", width: "350px" }}
                  />
                  <Button variant="outline-success" className="edit-profile-button">
                    Edit Profile Image
                  </Button>
                </Col>
                <Col md={8} className="profile-info">
                  <div className="profile-name">{user.name}</div>
                  <div className="profile-username">@{user.username}</div>
                  <div className="profile-email">Email: {user.email}</div>
                  <div className="profile-role">Role: {user.role}</div>
                  <div className="profile-created-at">Joined: {user.createdAt.substr(0, 10)}</div>
                  <Button variant="outline-success" className="edit-details-button">
                    Edit Details
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="user-buttons">
            <Container>
              <Row className="button-row">
                <Col md={4} className="button-column">
                  <Link to="/cart">
                    <Button variant="outline-success" className="user-button cart-button">
                      Cart
                    </Button>
                  </Link>
                </Col>
                <Col md={4} className="button-column">
                  <Link to="/orders">
                    <Button variant="outline-success" className="user-button order-button">
                      Order History
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default Profile;