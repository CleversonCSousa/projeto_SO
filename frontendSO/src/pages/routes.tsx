import { Routes, Route } from "react-router-dom";
import App from "./../App";
import Entradaesaida from "./entradasaida";
import Layout from "../layout/layout";
import Syscall from "./syscall";
import Memo from "./memo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<App />} />
        <Route path="syscall" element={<Syscall/>} />
        <Route path="memo" element={<Memo/>} />
        <Route path="es" element={<Entradaesaida />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
