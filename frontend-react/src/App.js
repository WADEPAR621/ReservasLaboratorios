import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import SobreNosotros from './components/pages/SobreNosotros';
import Login from './components/pages/IniciarSesion';
import Register from './components/pages/Registrarse';
import AgregarReserva from './components/pages/AgregarReserva';


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobrenosotros" element={<AgregarReserva />} />
                    <Route path="/iniciarsesion" element={<Login />} />
                    <Route path="/registrarse" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
/*
import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Realiza una solicitud al backend para verificar la autenticación
    axios.get('/api/check-auth')
      .then(response => setAuthenticated(response.data.authenticated))
      .catch(error => console.error(error));
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
    
  );
}

export default App;
*/



