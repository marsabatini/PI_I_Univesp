import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home/index";
import Cadastro from "../src/Pages/Home/Cadastro/";
import Login from "./Pages/Home/Login";
import Agenda from "./Pages/Home/adm/Agenda";
import Alertas from "./Pages/Home/adm/Alertas";
import Avisos from "./Pages/Home/adm/Avisos";
import Cadastros from "./Pages/Home/adm/Cadastros";
import Mural from "./Pages/Home/adm/Mural";


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Agenda" element={<Agenda/>} />
                <Route path="/Alertas" element={<Alertas/>} />
                <Route path="/Avisos" element={<Avisos/>} />
                <Route path="/Cadastros" element={<Cadastros/>} />
                <Route path="/Mural" element={<Mural/>} />
            </Routes>
        </BrowserRouter>
    );
}