import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/logo1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUser,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let isLoggedIn = true;

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#c4fa6f", color: "#052a2a" }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-reset">
              <Image
                src={logo}
                roundedCircle
                className=""
                style={{ width: "50px", height: "50px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="fs-2 fw-bold" style={{ color: "#052a2a" }}>
            SabziSaga
          </Navbar.Text>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-5 my-lg-0 fs-5 "
              style={{ maxHeight: "100vw" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button
                variant="outline-success"
                style={{ backgroundColor: "#052a2a", color: "#d9edc4" }}
                className="me-5 px-3"
              >
                Search
              </Button>

              <Nav.Link>
                <Link to="/" className="text-decoration-none text-reset">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/market" className="text-decoration-none text-reset">
                  Market
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/products"
                  className="text-decoration-none text-reset"
                >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/prediction"
                  className="text-decoration-none text-reset"
                >
                  Prediction
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/aboutus" className="text-decoration-none text-reset">
                  AboutUs
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/location"
                  className="text-decoration-none text-reset"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </Link>
              </Nav.Link>
              {isLoggedIn ? (
                <>
                  <Nav.Link href="#">
                    <Link
                      to="/cart"
                      className="text-decoration-none text-reset"
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                      <Badge pill bg="danger" id="cart_badge" className="mt-0">
                        2
                      </Badge>
                    </Link>
                  </Nav.Link>
                  <NavDropdown
                    title={<FontAwesomeIcon icon={faUser} />}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item>
                      <Link
                        to="/profile"
                        className="text-decoration-none text-reset"
                      >
                        {" "}
                        View Profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        to="/logout"
                        className="text-decoration-none text-reset"
                      >
                        {" "}
                        LogOut
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link
                      to="/login"
                      className="text-decoration-none text-reset"
                    >
                      {" "}
                      Login
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to="/signup"
                      className="text-decoration-none text-reset"
                    >
                      {" "}
                      SignUp
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
