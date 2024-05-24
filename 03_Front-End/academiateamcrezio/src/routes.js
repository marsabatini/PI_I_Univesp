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
                <Route path="/Home" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Redefinir_Senha" element={<Redefinir_Senha />} />
                <Route path="/Nova_Senha" element={<Nova_Senha />} />
                <Route path="/Agenda" element={<Agenda/>} />
                <Route path="/Alertas" element={<Alertas/>} />
                <Route path="/Avisos" element={<Avisos/>} />
                <Route path="/Cadastros" element={<Cadastros/>} />
                <Route path="/Mural" element={<Mural/>} />
                <Route path="/Aluno" element={<Aluno/>} />
                <Route path="/Aula_Experimental" element={<Aula_Experimental/>} />
                <Route path="/Planos" element={<Planos/>} />
                <Route path="/Agenda_Aluno" element={<Agenda_Aluno/>} />

                {/* <Route path="/perfil" element={<Perfil/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}