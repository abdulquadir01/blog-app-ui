import { useState } from "react";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Index from "../components/Index";

const Signup = () =>{
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      firstName: "",
      lastName: "",
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
          <div
            className="form-title"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h3>Let&apos;s get started!</h3>
          </div>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
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
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="warning" type="button" onClick={handleReset}>
              Reset
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </Index>
  );
};

export default Signup;
