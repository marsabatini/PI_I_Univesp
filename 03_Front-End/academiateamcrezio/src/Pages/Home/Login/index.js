import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";
import logo from "../../../Assets/logopng.png"



export default function Login() {


    return (

        <div>
            <section>


                <div class="container">
                    <div className="cadastro">
                        <div className="flexz">
                            <img src={logo} alt="logo tc" />
                            <p> caso não seja cadastrado ainda, crie sua conta!</p>
                            <a href="">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <button class="c-bnt">cadastrar</button>
                            </a>
                        </div>
                    </div>
                    <form className="login">
                        <h2>entre em seu cadastro </h2>
                        <div className="caixa-u">
                            <input type="text" name="" required />
                            <label>Usuario</label>
                        </div>
                        <div className="caixa-u">
                            <input type="password" name="" required />
                            <label>Senha</label>
                        </div>
                        <div>
                            <a href="" className="forget">Esqueceu a senha?</a>
                        </div>
                        <a href="" className="b-ent">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <button class="l-bnt">Entrar</button>
                        </a>
                    </form>
                </div>

            </section >
        </div >
    );
}

