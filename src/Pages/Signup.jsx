import { useState } from "react";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Index from "../components/Index";
import { signUp } from "../services/user-services";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // if (error.isError) {
    //   toast.error("Data is invalid, re-enter details!!");
    //   setError({ ...error, isError: false });
    //   return;
    // }
    console.log(formData);

    // TBD - validatiton

    // call register api
    signUp(formData)
      .then((response) => {
        console.log(response);
        toast.success("User Successfully Registered!!");
        resetForm();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!!");
        // handle errors properly
        setError({
          errors: error,
          isError: true,
        });
      });

    // reset form-data after submit
    resetForm();
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
            {/* <Form.Label>First Name</Form.Label> */}
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
              isValid={!error.errors}
              isInvalid={error.errors?.response?.data?.firstName ? true : false}
            />
            <Form.Control.Feedback>Looks good..</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {error?.errors?.response?.data?.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            {/* <Form.Label>Last Name</Form.Label> */}
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              isInvalid={error.errors?.response?.data?.lastName ? true : false}
            />
            <Form.Control.Feedback>Looks good..</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {error?.errors?.response?.data?.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              isInvalid={error.errors?.response?.data?.email ? true : false}
            />
            <Form.Control.Feedback>Looks good..</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {error?.errors?.response?.data?.email}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              isInvalid={error.errors?.response?.data?.password ? true : false}
            />
            <Form.Control.Feedback>Looks good..</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {error?.errors?.response?.data?.password}
            </Form.Control.Feedback>
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
              Have an account! Go to{" "}
              <Link to={"/login"} className="nav-item">
                Login
              </Link>
            </div>
          </Form.Group>
        </Form>
      </Container>
    </Index>
  );
};

export default Signup;
