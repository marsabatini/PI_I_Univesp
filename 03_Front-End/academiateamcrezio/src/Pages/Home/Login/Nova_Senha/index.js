import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import "./nova_senha.modules.css";


export default function Nova_Senha() {


    return (



        <>
            <div>
                <section>
                    <Header/>
                    <form action="">
                        <div className="nova-s">
                            <h1>escolha sua nova senha</h1>
                            <div className="input-g">
                                <label for="">nova senha</label>
                                <input type="text" name="" required />
                            </div>
                            <div className="input-g">
                                <label for=""> confirmar nova senha</label>
                                <input type="text" name="" required />
                            </div>
                            <div className="b-salvar">
                                <button>salvar nova senha</button>
                            </div>
                        </div>
                    </form>
                    <Footer/>
                </section>
            </div>
        </>

    );

}


