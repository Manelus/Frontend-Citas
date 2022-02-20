import React from "react";

class SimpleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', password: '', isLoading: false, isLogged: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    // console.log(event.target.name, event.target.value)
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.user || !this.state.password) {
      console.log('fields required!!!');
    } else {
      this.setState({isLoading: true});
      setTimeout(() => {
        this.setState({isLoading: false})
        this.setState({isLogged: true})
        console.log('submitted!!!!');
        console.log(this.state);
      }, 3000)
      
    }
  }

  render() {
    const {isLoading, isLogged} = this.state;
    return(
      <div>
      {isLoading && <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
          </div>
      }
      {isLogged && <div className="p-4">
              <p>Enhorabuena, estas dentro</p>
          </div>
      }
      {(!isLoading && !isLogged) &&
        <form onSubmit={this.handleSubmit}>
          <div className="p-4">
              <div className="input-group mb-3">
                  <span className="input-group-text bg-primary"><i
                          className="bi bi-person-plus-fill text-white"></i></span>
                  <input name="user" type="text" value={this.state.user} onChange={this.handleChange} placeholder="username" required />
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text bg-primary"><i
                          className="bi bi-key-fill text-white"></i></span>
                  <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="password"  required />
              </div>
              
              <button className="btn btn-primary text-center mt-2" type="submit">
                  Login
              </button>
              <p className="text-center mt-5">Don't have an account?
                  <span className="text-primary">Sign Up</span>
              </p>
              <p className="text-center text-primary">Forgot your password?</p>
          </div>
      </form>
      }
      </div>
    );
  }
}

export default SimpleLogin;