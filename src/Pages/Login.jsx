import { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
import Index from "../components/Index";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      <Container style={{ margin: "4rem auto" }}>
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
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </Index>
  );
};
export default Login;
