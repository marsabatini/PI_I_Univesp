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
import Aluno from "./Pages/Home/Aluno";
import Aula_Experimental from "./Pages/Home/Aulaexperimental";
import Nova_Senha from "./Pages/Home/Login/Nova_Senha";
import Redefinir_Senha from "./Pages/Home/Login/Redefinir_Senha";
import Planos from "./Pages/Home/Planos";


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/redefinir_Senha" element={<Redefinir_Senha />} />
                <Route path="/login/nova_Senha" element={<Nova_Senha />} />
                <Route path="/agenda" element={<Agenda/>} />
                <Route path="/alertas" element={<Alertas/>} />
                <Route path="/adm/avisos" element={<Avisos/>} />
                <Route path="/adm/cadastros" element={<Cadastros/>} />
                <Route path="/adm/mural" element={<Mural/>} />
                <Route path="/aluno" element={<Aluno/>} />
                <Route path="/aula_experimental" element={<Aula_Experimental/>} />
                <Route path="/planos" element={<Planos/>} />

                {/* <Route path="/perfil" element={<Perfil/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}