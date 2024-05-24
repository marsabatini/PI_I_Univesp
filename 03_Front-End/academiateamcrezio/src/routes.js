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
import Aluno from "./Pages/Home/Aluno";
import Aula_Experimental from "./Pages/Home/Aulaexperimental";
import Nova_Senha from "./Pages/Home/Login/Nova_Senha";
import Redefinir_Senha from "./Pages/Home/Login/Redefinir_Senha";
import Planos from "./Pages/Home/Planos";
import Agenda_Aluno from "./Pages/Home/Agenda_Aluno";


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/Redefinir_Senha" element={<Redefinir_Senha />} />
                <Route path="/login/Nova_Senha" element={<Nova_Senha />} />
                <Route path="/adm/agenda" element={<Agenda/>} />
                <Route path="/adm/alertas" element={<Alertas/>} />
                <Route path="/adm/avisos" element={<Avisos/>} />
                <Route path="/adm/cadastros" element={<Cadastros/>} />
                <Route path="/adm/mural" element={<Mural/>} />
                <Route path="/aluno" element={<Aluno/>} />
                <Route path="/aula_Experimental" element={<Aula_Experimental/>} />
                <Route path="/planos" element={<Planos/>} />
                <Route path="/agenda_aluno" element={<Agenda_Aluno/>} />

                {/* <Route path="/perfil" element={<Perfil/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}