import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/Sing_up';
import SobreNosotros from './components/pages/SobreNosotros';
import AdminRoutes from './AdminRoutes';
import { useState, useEffect } from 'react';
import StudentRoutes from './StudentRoutes';
import Inicio from './components/pages/Inicio';

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

const initState = {
  usuario: "",
  contrasena: "",
  rol: "",
  isAuth: false
}

const App = () => {
  return (
    <Router>
      <Routes>
        {usuarioLo.isAuth ? (
          usuarioLo.rol == "admin" ?(
              <Route
                path="/*"
                element={<AdminRoutes />}
              />
            )
            :
            (
              <Route
                path="/*"
                element={<StudentRoutes />}
              />
            )
        ) : (
          <>
            <Route
              path={`/SobreNosotros`}
              element={<SobreNosotros />}
            />
            <Route
              path={`/Sing_up`}
              element={<SignUp />}
            />
            <Route
              path={`/Login`}
              element={<Login usuarioLo={usuarioLo} setUsuario={setUsuario} />}
            />
            <Route
              path={`/*`}
              element={<Navigate to={"/Login"} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
