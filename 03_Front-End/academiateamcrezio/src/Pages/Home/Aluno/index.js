import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


import "./aluno.modules.css"
import foto_perfil from "../../../Assets/fotoperfil.jpeg";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Aluno() {

    return (

        <>
            <div>
                <section> 
                   
                    <div class="container">
                        <div className="foto-p">
                            <img src={foto_perfil} alt="" />
                        </div>
                        <div className="info">
                            <span>nome:</span>
                            <span>status:</span>
                            <span>graduação:</span>
                            <span>aulas para troca de graduação:</span>
                            <span>validade de exame medico:</span>
                        </div>
                        <div className="info">
                            <span>plano:</span>
                            <span>validade do plano:</span>
                            <span>forma de pagamento:</span>
                            <span>proximo vencimento:</span>
                        </div>
                    </div>
                    <span className="alerta"> notificaçoes importantes</span>
                    <span className="linha"></span>
                    <div className="containerb">
                        <div className="marcadas">
                            <h2>proximas aulas</h2>
                            <span>segunda</span>
                            <span>terça</span>
                            <span>quarta</span>
                            <span>quinta</span>
                            <span>sexta</span>
                            <span>sabado</span>
                        </div>
                        <div className="botoes">
                            <a className=""><button>agende suas proximas aulas</button></a>
                            <br />
                            <a Link=""><button>avaliação fisica</button></a>
                            <a Link=""><button>exame medico</button></a>
                            <a Link=""><button>graduação</button></a>
                        </div>
                        <div className="avisos">
                            <h2>avisos importantes</h2>
                            <p>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );


}
