import React from "react";
import { Navigate } from "react-router-dom"
import AuthService from "../services/auth"

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nombre: '', apellido: '', email: '', password: '', submitDone:false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      // console.log(event.target.name, event.target.value)
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
  
      if (this.state.passwordOk !== this.state.password) return (
        this.setState({passwordOk: true})
      )
      console.log('Submitted!')
      console.log(this.state.nombre, this.state.apellido, this.state.email, this.state.password)
      AuthService.registrar(
          this.state.nombre,
          this.state.apellido,
          this.state.email,
          this.state.contrasenya
      ).then(this.setState({ submitDone:true }))
    }
  
    render(){
      return (
          <div className="h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
              <div>
                  <h2 className="mb-5">Register</h2>
                  <form onSubmit={this.handleSubmit}>
                      <div className="container d-flex flex-column align-items-between justify-content-center" >
                          <label className="row m-2">
                              <p className="col-6">Nombre:</p>
                              <input className="col-6" name="nombre" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                          </label>
                          <label className="row m-2">
                              <p className="col-6">Apellido:</p>
                              <input className="col-6" name="apellido" type='text' required value={this.state.apellido} onChange={this.handleChange} />
                          </label>
                          <label className="row m-2">
                              <p className="col-6">Email:</p>
                              <input className="col-6" name="email" type='email' required value={this.state.email} onChange={this.handleChange} />
                          </label>
                          <label className="row m-2">
                              <p className="col-6">Contraseña:</p>
                              <input className="col-6" name="password" type='password' required value={this.state.password} onChange={this.handleChange} />
                          </label>
                      </div>
                      <button className="mt-5" type="submit">Acceder</button>
                  </form>
                  {this.state.submitDone && <Navigate to='/perfil'/>}

              </div>
          </div>
      )
  }

}
  
  export default Register