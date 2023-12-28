<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import Login from './components/Login';

function App() {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Login/>
            </>
          }>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
=======
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import MapaPisos from './components/MapaPisos.js';


function App() {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <MapaPisos/>
            </>
          }>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
>>>>>>> 34d4c440c3b200aaa1750301ffed5a9e451235ef
