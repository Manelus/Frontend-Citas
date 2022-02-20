import React from "react";

import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

class ReactBootstrapLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", password: "", isLoading: false, isLogged: false, validated: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleValidated = this.handleValidated.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({validated: true});
    } else {
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
        this.setState({ isLogged: true });
        console.log("submitted!!!!");
        //console.log(this.state);
      }, 3000);
    }

    
    
    /*if (!this.state.user || !this.state.password) {
      console.log("fields required!!!");
    } else {
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
        this.setState({ isLogged: true });
        console.log("submitted!!!!");
        console.log(this.state);
      }, 3000);
    }*/
  }

  render() {
    const { isLoading, isLogged } = this.state;
    return (
      <div>
        {isLogged && (
          <Navigate to="/" replace={true} />
        )}
        {isLoading && <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }
        <div className="text-center">
            <h3 className="text-primary">Sign In</h3>
        </div>
        <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control   type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
          {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Control.Feedback type="invalid">
              Please pcheck me out
            </Form.Control.Feedback>
          </Form.Group>*/}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReactBootstrapLogin;
