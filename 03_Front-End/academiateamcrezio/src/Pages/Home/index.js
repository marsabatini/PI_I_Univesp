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
                            <Link to="/Agenda">Agenda</Link><br/>
                            <Link to="/Alertas">Alertas</Link><br/>
                            <Link to="/Avisos">Avisos</Link><br/>
                            <Link to="/Cadastros">Cadastros</Link><br/>
                            <Link to="/Mural">Mural</Link><br/>
                            <Link to="/Aluno">Aluno</Link><br/>
                            <Link to="/Aula_Experimental">Aula_Experimental</Link><br/>
                            <Link to="/Planos">Planos</Link><br/>
                            <Link to="/Nova_Senha">Nova_Senha</Link><br/>

                        <Footer/>
                    </section>
                </container>
            </div>
        </>
    )

}
