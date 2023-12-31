import { Route, Routes } from "react-router"
import './App.css';
import SignUp from './components/Sing_up';
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


function Usuario({ usuario }) {
  const [editParticion, setEditParticion] = useState([]);
  const handleEditParticion = (particion) => {
    setEditParticion(particion);
  }
  return (
    <Routes>
      {                                                       }
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Principal" element={<Principal />} />
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Cuentas" element={<Cuentas />} />
      <Route path="/" element={<Login />} />
      <Route path="/EstadoCuenta" element={<EstadoCuenta />} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/PlanActivo" element={<PlanActivo />} />

      {/* Páginas relacionadas con useState */}
      <Route path="/Blog1" element={<Blog1 />} />
      <Route path="/BlogInversion" element={<BlogInversion />} />
      <Route path="/BlogAdulto" element={<BlogAdulto />} />
      <Route path="/Divisas" element={<Divisas />} />
      <Route path="/PlanAhorro" element={<PlanAhorro />} />
    </Routes>
  );
}

export default Usuario;