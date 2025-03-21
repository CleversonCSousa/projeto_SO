import { Routes, Route } from "react-router-dom";
import App from "./../App";
import Entradaesaida from "./entradasaida";
import Layout from "../layout/layout";
import Syscall from "./syscall";
import Memo from "./memo";
import CPU from "./cpu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="syscall" element={<Syscall/>} />
        <Route path="memo" element={<Memo/>} />
        <Route path="es" element={<Entradaesaida />} />
        <Route path="cpu" element={<CPU />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
