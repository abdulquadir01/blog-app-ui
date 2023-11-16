import { Link, Navigate, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  doLogout,
  getCurrentUserDetail,
  isLoggedIn,
} from "../../util/AuthUtil";
import { useEffect, useState } from "react";

function CustomNavbar() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  const [brandNavigateTo, setBrandNavigateTo] = useState("/home");

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/login");
    });
  };

  return (
    <Navbar
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to={brandNavigateTo}
          onClick={
            login
              ? () => setBrandNavigateTo("/home")
              : () => setBrandNavigateTo("/login")
          }
        >
          Blogg
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/new">
              <i className="bi bi-pencil-square"></i> Write
            </Nav.Link>
            <NavDropdown title={user?.firstName} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs">
                Posts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/saved">
                Bookmarked
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
