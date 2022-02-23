import React from "react";

class nuevaMascota extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nombre: '', tipo: '', raza: '', idUser: '', isRegisted: false};
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
  
  export default nuevaMascota