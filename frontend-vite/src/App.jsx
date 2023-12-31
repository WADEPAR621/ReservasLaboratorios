import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MapaPisos from './components/pages/MapaPisos';
import MisReservas from './components/pages/MisReservas';
import Login from './components/Login';
import SignUp from './components/Sing_up';
import Inicio from './components/pages/Inicio';
import SobreNosotros from './components/pages/SobreNosotros';

const ProtectedRoute = ({ element, ...props }) => {
  //CONSTANTES DE PARAMETROS
  const [handlePiso, setEditPiso] = useState([]);

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" replace state={{ from: props.location }} />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {                                     }
         <Route
          path={`/SobreNosotros`}
          element={<SobreNosotros/>}
        />
          <Route
          path={`/Inicio`}
          element={<Inicio/>}
        />
         <Route
          path={`/Sing_up`}
          element={<SignUp/>}
        />
        <Route
          path={`/`}
          element={<Login/>}
        />
        
      </Routes>
    </Router>
  );
};

export default App;