import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from "./components/layout/layout";
import About from './components/nav-bar/about';
import Contact from "./components/nav-bar/contact";
import Home from "./components/nav-bar/home";
import Register from "./components/nav-bar/register";
import NoMatch404 from "./components/nav-bar/404";
import Login from './components/nav-bar/login';
import Perfil from "./components/pages/perfil";
import Mascotas from "./components/pages/mascotas";
import RegistroMascotas from "./components/pages/registroMascotas";
import Citas from "./components/pages/citas";
import NuevaCita from "./components/pages/nuevaCita";


function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch404 />} />
        {/* usuarios */}
          <Route path="perfil" element={<Perfil />} />
        {/* mascotas */}
          <Route path="mascotas" element={<Mascotas />} />
          <Route path="registro" element={<RegistroMascotas />} />
        {/* citas */}
          <Route path="citas" element={<Citas />} />
          <Route path="nuevaCita" element={<NuevaCita />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
