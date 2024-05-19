import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home/index";
import Cadastro from "../src/Pages/Home/Cadastro/";
import Login from "./Pages/Home/Login";
import Agenda from "./Pages/Home/Adm/Agenda";
import Alertas from "./Pages/Home/Adm/Alertas";
import Avisos from "./Pages/Home/Adm/Avisos";
import Cadastros from "./Pages/Home/Adm/Cadastros";
import Mural from "./Pages/Home/Adm/Mural";

// import Perfil from "./Pages/Home/Aluno";


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/agenda" element={<Agenda/>} />
                <Route path="/alertas" element={<Alertas/>} />
                <Route path="/avisos" element={<Avisos/>} />
                <Route path="/cadastros" element={<Cadastros/>} />
                <Route path="/mural" element={<Mural/>} />

                {/* <Route path="/perfil" element={<Perfil/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}