import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Blogg
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/user/new-blog">
              Write
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              Log In
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Register
            </Nav.Link>
            <NavDropdown
              title="UserName"
              id="basic-nav-dropdown"
              style={{ "padding-right": "2rem" }}
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/blogs">
                Posts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/saved">
                Bookmarked
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">
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
