import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container main-section">
      
        <Form>
            <div className="main-form">
            <h2 className="text-center fw-bold">Login Please</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="row">
                <div className="col-lg-4">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
                </div>
                
                <div className="col-lg-6 d-flex justify-content-end pe-1 me-1">
                    <Link to='/register'>register now</Link>
                </div>
                <div className="google-signin text-center m-3">
                    <span>Sign In With Google</span>
                </div>
            </div>
            <div className="login-button text-center">
            <Button className="text-center" variant="primary" type="submit">
                Login
            </Button>
            </div>
            </div>
        </Form>
     
    </div>
  );
};

export default Login;
