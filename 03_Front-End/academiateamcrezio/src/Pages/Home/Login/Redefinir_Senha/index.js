import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import "./redefinir_senha.modules.css";

export default function Redefinir_Senha() {


    return (

        <>
            <div>
                <section>
                    <Header/>
                    <form action="">
                        <div className="recuperação">
                            <h1 className="center">esqueci minha senha</h1>
                            <h3>no quadro abaixo coloque email de seu cadastro para verificação de senha</h3>
                            <div className="emailveri">
                                <input type="email" name-="" required placeholder="Email do cadastro" />
                            </div>
                            <h3>apos a redefinição de senha voce vai estar recebendo um email em sua caixa de entrada para verificação</h3>
                           <Link to="/Nova_Senha"> <button>envie email para redefinição</button> </Link>
                        </div>
                    </form>
                    <Footer/>
                </section>
            </div>
        </>

    );

}



