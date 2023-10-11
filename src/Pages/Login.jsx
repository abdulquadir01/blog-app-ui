import { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
import Index from "../components/Index";
import { Link } from "react-router-dom";
import { signIn } from "../services/user-services";
import { toast } from "react-toastify";
import { doLogin } from "../auth";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
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
      username: "",
      password: "",
    });
    window.location.reload(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);

    //  Form Validation
    if (!formData.username || !formData.password) {
      toast.error("Email or Password is missing!!");
      return;
    }

    //  Request to login api to generarte access-token
    signIn(formData)
      .then((response) => {
        console.log("Login Response:\n ", response);  

        // save response to localStorage
        doLogin(response, ()=>{
          console.log("login detais saved in localstorage");

          // redirect to home/dashboard page

          
        })

        setFormData({
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Login Error: \n", error);

        if (error?.response?.status == 400 || error?.response?.status == 404) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error("Something went wrong on server !!");
        }

        setError({
          errors: error,
          isError: true,
        });
      });

    // reset form after submit
    setFormData({
      username: "",
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
            <h3>Welcome Back!</h3>
          </div>

          <div
            className="form-title"
            style={{ textAlign: "center", color: "red", margin: "1rem" }}
          >
            <p>{error?.errors?.response?.data?.message}</p>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="username"
              name="username"
              placeholder="Email"
              value={formData.username}
              onChange={handleChange}
              isValid={!error.errors}
              isInvalid={error.errors?.response?.data?.message ? true : false}
            />
            {/* <Form.Control.Feedback type="invalid">
              {error?.errors?.response?.data?.message}
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              isValid={!error.errors}
              isInvalid={error.errors?.response?.data?.message ? true : false}
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
