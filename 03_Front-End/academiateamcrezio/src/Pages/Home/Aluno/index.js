import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


import style_aluno from "./aluno.modules.css"
import foto_perfil from "../../../Assets/fotoperfil.jpeg";

import Header from "../../Components/Header_Logado";
import Footer from "../../Components/Footer";

export default function Aluno() {

    return (

        <>
            
                <section className="section_perfil_aluno">
                    <Header />
                    
                        <div class="container_aluno">
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
                        <span className="alerta_aluno"> notificaçoes importantes:</span>
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
                                <Link to="/agenda_aluno"><button>agende suas proximas aulas</button></Link>
                                <br />
                                <a Link=""><button>avaliação fisica</button></a>
                                <a Link=""><button>exame medico</button></a>
                                <a Link=""><button>graduação</button></a>
                            </div>
                            <div className="avisos_aluno">
                                <h2>avisos importantes</h2>
                                    <ul>
                                        <li>Evento no ibirapuera dia 20/05/2024</li>
                                    </ul>
                            </div>
                        </div>
                        <Footer />
               
                </section>

        </>

    );


}
