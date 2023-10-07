import { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
import Index from "../components/Index";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Index>
      <Container style={{ margin: "5rem auto" }}>
        <Form
          style={{
            padding: "3rem",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          onSubmit={handleSubmit}
        >
          <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
            Welcome Back!
          </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            style={{
              paddingTop: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="warning" type="button" onClick={resetForm}>
              Reset
            </Button>
          </Form.Group>

          <Form.Group
            style={{
              paddingTop: "3rem",
              textAlign: "center",
            }}
          >
            <div className="">
              New here? Click here to{" "}
              <Link to={"/signup"} className="nav-item">
                Register
              </Link>
            </div>
          </Form.Group>
        </Form>
      </Container>
    </Index>
  );
};
export default Login;
