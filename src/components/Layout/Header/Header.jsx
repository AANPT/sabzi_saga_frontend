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
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";

const Header = ({ isAuthenticated = false, user }) => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

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

              <Nav.Link href="/" className="text-decoration-none text-reset">

                Home

              </Nav.Link>
              <Nav.Link href="/shops" className="text-decoration-none text-reset">

                Market

              </Nav.Link>
              <Nav.Link href="/products" className="text-decoration-none text-reset">
                {" "}

                Products

              </Nav.Link>
              <Nav.Link href="/prediction" className="text-decoration-none text-reset">
                {" "}

                Prediction

              </Nav.Link>
              <Nav.Link href="/aboutus" className="text-decoration-none text-reset">
                {" "}

                AboutUs

              </Nav.Link>
              {/* <Nav.Link href="/location" className="text-decoration-none text-reset">
                {" "}

                <FontAwesomeIcon icon={faLocationDot} />

              </Nav.Link> */}
              {isAuthenticated ? (
                <>
                  <Nav.Link href="/cart" className="text-decoration-none text-reset">

                    <FontAwesomeIcon icon={faCartShopping} />
                    <Badge pill bg="danger" id="cart_badge" className="mt-0">

                      {user.cart.length}
                    </Badge>

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

                    {
                      user && user.role === 'vendor' && <>
                        <NavDropdown.Item>
                          <Link
                            to="/vendor/dashboard"
                            className="text-decoration-none text-reset"
                          >
                            Dashboard
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                      </>
                    }
                    {
                      user && user.role === 'admin' && <>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/dashboard"
                            className="text-decoration-none text-reset"
                          >
                            Dashboard
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                      </>
                    }

                    <NavDropdown.Item>
                      {" "}
                      <Link className="text-decoration-none text-reset" onClick={logoutHandler}>
                        LogOut
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Navbar.Text>
                    <Link
                      to="/login"
                      className="text-decoration-none text-reset"
                    >
                      {" "}
                      Login
                    </Link>
                  </Navbar.Text>
                  <Navbar.Text>
                    <Link
                      to="/registeroption"
                      className="text-decoration-none text-reset"
                    >
                      {" "}
                      SignUp
                    </Link>
                  </Navbar.Text>
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
