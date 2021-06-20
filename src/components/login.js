import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { login } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      alert("Logged in successfully");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      history.push("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <Card className=" mt-4">
      <Card.Body>
        <h2 className="text-center mb-4">Login</h2>
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
        </Form>
        <Button
          className="w-100 mt-4"
          type="submit"
          disabled={isLoading}
          onClick={(e) => handlesubmit(e)}
        >
          {isLoading ? "Loading…" : "Login"}
        </Button>
      </Card.Body>
      <div className="w-100 text-center mt-2">
        Don't have an account ? <Link to="/signup">Sign up</Link>
      </div>
    </Card>
  );
}
