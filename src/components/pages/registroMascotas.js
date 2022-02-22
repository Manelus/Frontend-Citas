import React from "react";


class Registro extends React.Component {
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
          
          console.log('submitted!!!!');
          console.log(this.state);
        }, 3000)
        
      }
    }
  
    render() {
      const {isRegisted} = this.state;
      return(
        <div>
        {isRegisted && <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }
        
        {(!isRegisted) &&
          <form onSubmit={this.handleSubmit}>
            <div className="text-center">
              <h3 className="text-primary">Registrate</h3>
            </div>
            <div className="p-4">
                <div className="input-group mb-3">
                    <span className="input-group-text bg-primary"><i
                            className="bi bi-person-plus-fill text-white"></i></span>
                    <input name="nombre" type="text" value={this.state.user} onChange={this.handleChange} placeholder="nombre" required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-primary"><i
                            className="bi bi-person-plus-fill text-white"></i></span>
                    <input name="tipo" type="text" value={this.state.user} onChange={this.handleChange} placeholder="tipo" required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-primary"><i
                            className="bi bi-person-plus-fill text-white"></i></span>
                    <input name="raza" type="text" value={this.state.user} onChange={this.handleChange} placeholder="raza" required />
                </div>
               
                <button className="btn btn-primary text-center mt-2" type="submit">
                    Registrar
                </button>
                <p className="text-center text-primary">Forgot your password?</p>
            </div>
        </form>
        }
        </div>
      );
    }
  }
  
  export default Registro