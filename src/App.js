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
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch_404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
