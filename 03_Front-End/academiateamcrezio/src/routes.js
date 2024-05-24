import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home/index";
import Cadastro from "../src/Pages/Home/Cadastro/";
import Login from "./Pages/Home/Login";
import Agenda from "./Pages/Home/Adm/Agenda";
import Alertas from "./Pages/Home/Adm/Alertas";
import Avisos from "./Pages/Home/Adm/Avisos";
import Perfis from "./Pages/Home/Adm/Perfis";
import Mural from "./Pages/Home/Adm/Mural";
import Aluno from "./Pages/Home/Aluno";
import Aula_Experimental from "./Pages/Home/Aulaexperimental";
import Nova_Senha from "./Pages/Home/Login/Nova_Senha";
import Redefinir_Senha from "./Pages/Home/Login/Redefinir_Senha";
import Planos from "./Pages/Home/Planos";
import Agenda_Aluno from "./Pages/Home/Agenda_Aluno";
import Cadastro_Professor from "./Pages/Home/Adm/CadastroGerais";


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
                <Route path="/Adm/agenda" element={<Agenda/>} />
                <Route path="/Adm/alertas" element={<Alertas/>} />
                <Route path="/Adm/avisos" element={<Avisos/>} />
                <Route path="/Adm/perfis" element={<Perfis/>} />
                <Route path="/Adm/mural" element={<Mural/>} />
                <Route path="/Adm/cadastro_gerais" element={<Cadastro_Professor/>} />
                <Route path="/aluno" element={<Aluno/>} />
                <Route path="/aula_Experimental" element={<Aula_Experimental/>} />
                <Route path="/planos" element={<Planos/>} />
                <Route path="/agenda_aluno" element={<Agenda_Aluno/>} />

                {/* <Route path="/perfil" element={<Perfil/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}