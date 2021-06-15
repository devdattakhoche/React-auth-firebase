import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Container>
          <Signup />
        </Container>
      </AuthProvider>
    );
  }
}
