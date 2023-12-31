import {Route,Routes} from "react-router"
import './App.css';
import SignUp from './components/SignUp';
import Principal from './components/Principal';
import Inicio from './components/Inicio';
import Cuentas from './components/Cuentas';
import Login from './components/Login';
import EstadoCuenta from "./components/EstadoCuenta";
import SobreNosotros from "./components/SobreNosotros";
import Blogs from "./components/Blogs"
import PlanActivo from "./components/PlanActivo"


import { useState } from "react";
import Blog1 from "./components/Blog1";
import BlogInversion from "./components/BlogInversion";
import BlogAdulto from "./components/BlogAdulto";
import Divisas from "./components/Divisas";
import PlanAhorro from "./components/PlanAhorro";


function Usuario({usuario}) {
    const [editParticion, setEditParticion] = useState([]);
    const handleEditParticion = (particion) => {
      setEditParticion(particion);
    }
    return (
      <Router>
        <Routes>
          {/*
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute
                element={<MapaPisos />}
              />
            }
          />
          */}
          <Route
            path={`/MapaPisos`}
            element={<MapaPisos/>}
          />
  
          <Route
            path="/MisReservas"
            element={<MisReservas />}
          />
        </Routes>
      </Router>
    );
  }
  
  export default Usuario;