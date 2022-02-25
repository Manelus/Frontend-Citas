import React from "react";
import { Navigate } from "react-router-dom"
import axios from "axios";


class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nombre: '', tipo: '', raza: '', submitDone:false, isLoaded: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
     
      axios.post('http://localhost:4000/usuarios/register',{
        nombre: this.state.nombre,
        apellido: this.state.tipo,
        email: this.state.raza
      })
      .then(response => {
      this.setState({items: response.data, submitDone: true, isLoaded: true})
      })
      .catch(error => {
      this.setState({
          isLoaded: true,
          error
      })
      })
    }
  
    render() {
      return (
          <div className="container">
              <h2>Registra tu mascota</h2>
              <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                  <div className="container">
                      <label className="row m-2 mb-3">
                          <p className="col-6">Nombre:</p>
                          <input className="col-6" name="nombre" type='text' required onChange={this.handleChange}/>
                      </label>
                      <label className="row m-2">
                          <p className="col-6">Tipo:</p>
                          <input className="col-6" name="tipo" type='text' required onChange={this.handleChange}/>
                      </label>
                      <label className="row m-2">
                          <p className="col-6 align-self-center">Raza</p>
                          <div className="col-6 p-0 d-flex flex-column align-items-center">
                          </div>
                      </label>
                  </div>
              </form>
              
              <button type="submit">Registrar</button>
              
          </div>
      )
  }
}
  
  export default Register