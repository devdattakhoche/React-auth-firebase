import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./dashboard";
import login from "./login";
export default class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={login} />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    );
  }
}
