import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


import style_aluno from "./aluno.modules.css";
import foto_perfil from "../../../Assets/fotoperfil.jpeg";

import Header from "../../Components/Header_Logado";
import Footer from "../../Components/Footer";

export default function Aluno() {

    async function OpenInfo() {

        let arrow = document.getElementById("hidden_dados"),
            div = document.getElementById("dados_aluno");
            

        if(div.className == "info_responsivo"){

            div.className = "open_dados_aluno";
            arrow.className = "bi bi-caret-up-fill";
            
        }else {

            div.className = "info_responsivo";
            arrow.className = "bi bi-caret-down-fill";
        }
    }

    return (

        <>
            
                <section className="section_perfil_aluno">
                    <Header />
                    
                        <div class="container_aluno">
                            <div className="foto-p">
                                <img src={foto_perfil} alt="" />
                                <span className="notificação_aluno_ft"> notificações importantes:</span> {/* RESPONSIVIDADE */}
                            </div>

                            <div className="dados_aluno">
                                <div id="dados_aluno" className="info_responsivo"> {/* RESPONSIVIDADE */}
                                    <div className="dados_title">
                                        <h2> Dados Pessoais </h2>
                                        <i onClick={OpenInfo}  id="hidden_dados" class="bi bi-caret-down-fill"></i>
                                        {/*<i class="bi bi-caret-down-fill"></i> */}
                                    </div>
                                    <span>nome:</span>
                                    <span>status:</span>
                                    <span>graduação:</span>
                                    <span>aulas para troca de graduação:</span>
                                    <span>validade de exame medico:</span>
                                    <span>plano:</span>
                                    <span>validade do plano:</span>
                                    <span>forma de pagamento:</span>
                                    <span>proximo vencimento:</span>
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

                        </div>
                        <span className="notificação_aluno"> notificações importantes:</span>
                        <span className="linha"></span>
                        <div className="containerb">
                            <div id="aulas_marcadas" className="marcadas">

                                <div className="marcadas_title">
                                    <h2>proximas aulas</h2>
                                    <i id="hidden_aulas" class="bi bi-caret-down-fill"></i>
                                </div>

                                <span>segunda:</span>
                                <span>terça:</span>
                                <span>quarta:</span>
                                <span>quinta:</span>
                                <span>sexta:</span>
                                <span>sábado:</span>
                            </div>
                            <div className="botoes">

                                <div>
                                    <Link to="/agenda_aluno"><button>agende suas proximas aulas</button></Link>
                                </div>

                                <div className="doc_buttons">
                                    <a Link=""><button>avaliação fisica</button></a>
                                    <a Link=""><button>exame medico</button></a>
                                    <a Link=""><button>graduação</button></a>
                                </div>
                            </div>
                            <div id="avisos" className="avisos_aluno">
                                <div className="avisos_aluno_title">
                                    <h2>avisos importantes</h2>
                                    <i id="hidden_avisos" class="bi bi-caret-down-fill"></i>
                                </div>
                                    <ul>
                                        <li>Evento no ibirapuera dia 20/05/2024</li>
                                    </ul>
                            </div>
                        </div>
               
                </section>
                <Footer />

        </>

    );


}
