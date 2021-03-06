import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

import { Link } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpassawordRef = useRef();
  const { signup } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function handlesubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmpassawordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setLoading(true);
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      alert("Account createed Successfully");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmpassawordRef.current.value = "";
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <Card className=" mt-4">
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef}></Form.Control>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef}></Form.Control>
          </Form.Group>
          <Form.Group id="confirmpassaword">
            <Form.Label>Confirm Passaword</Form.Label>
            <Form.Control
              type="password"
              ref={confirmpassawordRef}
            ></Form.Control>
          </Form.Group>
        </Form>
        <Button
          className="w-100 mt-4"
          type="submit"
          disabled={isLoading}
          onClick={(e) => handlesubmit(e)}
        >
          {isLoading ? "Loading???" : "Sign Up"}
        </Button>
      </Card.Body>
      <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/login">Login</Link>
      </div>
    </Card>
  );
}
