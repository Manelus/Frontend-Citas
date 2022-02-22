import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from "./components/layout/layout";
import About from './components/pages/about.component';
import Contact from "./components/pages/contact.component";
import Home from "./components/pages/home.component";
import Perfil from "./components/pages/perfil";
import Mascotas from "./components/pages/mascotas";
import RegistroMascotas from "./components/pages/registroMascotas";
import NoMatch_404 from "./components/pages/404";
// import SimpleLogin from './components/simple-login.component';
import ReactBootstrapLogin from './components/pages/react-bootstrap-login.component';

function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<ReactBootstrapLogin />} />
        </Route>
        <Route>
          <Route path="perfil" element={<Perfil />} />
          <Route path="mascotas" element={<Mascotas />} />
          <Route path="registro" element={<RegistroMascotas />} />
          <Route path="*" element={<NoMatch_404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
