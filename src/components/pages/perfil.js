import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import Citas from "./citas";
import Mascotas from "./mascotas";



const Perfil = () =>  {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { id, token} = useParams();
    
    

    useEffect( () => {
        const retrieveProfile = async () => {
            await axios(`http://localhost:4000/usuarios/id/${id}`, { headers: {"Authorization" : `Bearer ${token}`}})
            .then(response => {
                setUser(response?.data)
                setIsLoaded(true)
            })
            .catch(error => {
                setIsLoaded(true)
                setError(error)
            })
        }
        if (!user) retrieveProfile();
    }, [user, id, token])

    if (error) return (<div>Error: {error.message}</div>);
    if (!isLoaded) return (<div>Loading...</div>);

    return (
        
            
        <div className="h-75">
            <h2>Perfil</h2>
            <div className="container mt-5 d-flex flex-column justify-content-around">
            <span>{`${user.nombre} ${user.apellido}`}</span> 
                <Mascotas />
            </div>
                <button className="buttonLink my-5"><Link to='Mascota'>Mascota</Link></button>
        </div>
    )
    
}

export default Perfil;