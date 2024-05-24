import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

import "./styles.css";


import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function Inicio() {



    return ( 
        <>
            <div>
                <container>
                    <section>
                        <Header/>

                            <Link to="/login">login  </Link><br/>
                            <Link to="/Adm/agenda">Agenda</Link><br/>
                            <Link to="/Adm/alertas">Alertas</Link><br/>
                            <Link to="/Adm/avisos">Avisos</Link><br/>
                            <Link to="/Adm/perfis">Perfis</Link><br/>
                            <Link to="/Adm/mural">Mural</Link><br/>
                            <Link to="/Adm/cadastro_gerais">Cadastro_Gerais</Link><br/>
                            <Link to="/aluno">Aluno</Link><br/>
                            <Link to="/aula_Experimental">Aula_Experimental</Link><br/>
                            <Link to="/planos">Planos</Link><br/>
                            <Link to="/nova_Senha">Nova_Senha</Link><br/>
                            <Link to="/agenda_Aluno">Agenda_Aluno</Link><br/>
                            <Link to="/cadastro">Cadastro</Link><br/>

                        <Footer/>
                    </section>
                </container>
            </div>
        </>
    )

}
