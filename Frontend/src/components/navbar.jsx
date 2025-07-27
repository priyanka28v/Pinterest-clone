import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Nav.module.css";

import { Login } from "../pages/form/login";
import { Signup } from "../pages/form/signup";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export function NavigationBar({ show = () => {}, onhide = () => {} }) {
 const location = useLocation(); 
  const [showLoginModal, setshowLoginModal] = useState(false);
  const [showSignupModal, setshowSignupModal] = useState(false);

  const handleShow = () => {
    setshowLoginModal(true);
  };
  const handelSignupMoadal = () => {
    setshowSignupModal(true);
  };

 useEffect(() => {
    if (location.pathname === "/") {
      if (showLoginModal || showSignupModal) {
        onhide();
      } else {
        show();
      }
    }
  }, [showLoginModal, showSignupModal, location.pathname])

  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top" className="mx pt-3 px-4 pb-0">
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="me-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/35/Pinterest_Logo.svg"
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="Pinterest"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/explore" className="text-black fw-bolder">
              Explore
            </Nav.Link>
          </Nav>
        </div>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto me-0 p-2">
            <Nav.Link as={Link} to="/about" className={`px-3 fw-medium  ${styles.lk}`}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/business" className={`px-3 fw-medium  ${styles.lk}`}>
              Business
            </Nav.Link>
            <Nav.Link as={Link} to="/create" className={`px-3 fw-medium  ${styles.lk}`}>
              Create
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className={`px-3 fw-medium ${styles.lk}`}>
              News
            </Nav.Link>
            <Nav.Link
              as="button"
              onClick={handleShow}
              className={`px-3 text-white fw-semibold rounded-4 ${styles.login}`}

            >
              Log in
            </Nav.Link>
            <Login
              show={showLoginModal}
              onHide={() => setshowLoginModal(false)}
            ></Login>
            <Nav.Link
              as="button"
              onClick={handelSignupMoadal}
              className={`px-3 ms-2 me-0 text-dark fw-semibold rounded-4 ${styles.signup}`}
            >
              Sign up
            </Nav.Link>
            <Signup
              show={showSignupModal}
              onHide={() => {
                setshowSignupModal(false);
              }}
            ></Signup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
