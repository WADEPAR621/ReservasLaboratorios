import { Route, Routes } from "react-router"
import './App.css';
import AdminCRUD from "./components/pages/AdminCRUD";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path={`/Admin`}
        element={<AdminCRUD/>}
      />
    </Routes>
  );
}


export default AdminRoutes;