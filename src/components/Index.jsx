import { Children } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = ({ children }) => {
  const loginHandler = () => {};
  const signUpHandler = () => {};

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Blogg
          </Navbar.Brand>
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/login" onClick={loginHandler}>
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" onClick={signUpHandler}>
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="" style={{ margin: "0 auto", width: "60%" }}>
        {children}
      </Container>
    </>
  );
};
export default Index;
