import axios from "axios";

const url = 'http://localhost:3000/'

class AuthService {
    async login(email, password){
        const res = await axios.post(url + 'usuarios/login',{
        email,
        password
    });
    if (res.data.token) {
        localStorage.setItem('usuario', JSON.stringify(res.token))
    }
    return res.data;
    }
    logOut(){
        return axios.delete(url + 'usuarios/logout')
    }
    registrar(nombre, apellido,email, password){
        return axios.post(url + 'usuarios/reister',{
            nombre,
            apellido,
            email,
            password
        })
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('usuario'))
    }
}

export default new AuthService()