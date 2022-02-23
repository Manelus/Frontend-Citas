import React from "react";

class nuevaCita extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nombreMascota: '', fecha: '', hora: '', isRegisted: false};
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
        this.setState({isRegisted: true});
        setTimeout(() => {
          this.setState({isRegisted: false})
        }, 3000)
        
      }
    }
  
    render() {
      return (
          <div className="container">
              <h2>Escoge la cita</h2>
              <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                  <div className="container">
                      <label className="row m-2 mb-3">
                          <p className="col-6">Nombre mascota:</p>
                          <input className="col-6" name="nombreMascota" type='text' required onChange={this.handleChange}/>
                      </label>
                      <label className="row m-2">
                          <p className="col-6">Fecha:</p>
                          <input className="col-6" name="fecha" type='date' required onChange={this.handleChange}/>
                      </label>
                      <label className="row m-2">
                          <p className="col-6 align-self-center">Hora</p>
                          <input className="col-6" name="hora" type='date' required onChange={this.handleChange}/>
                      </label>
                  </div>
              </form>
              
              <button type="submit">Registrar</button>
              
          </div>
      )
  }
}
  
  export default nuevaCita