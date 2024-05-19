
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./alerta.modules.css";
import Gerenciador_ADM from "../../../Components/Gerenciador";


export default function Alertas() {

    return (

        <>
            <div>
                <section>

                    <div class="caixa">
                        <Gerenciador_ADM />
                        <section className="alert_section">
                            <div className="h3">
                                <h3>
                                    ALERTAS
                                </h3>
                            </div>

                            <div className="alertas">
                                <div className="graduacao" >
                                    <h2>
                                        APLICAR TROCA DE GRADUAÇÃO
                                    </h2>
                                    <ul>
                                        <li>098 - Paulo V. Mentani (Azul)</li>
                                    </ul>
                                </div>
                                <div className="avaliacao_fisica">
                                    <h2>
                                        AVALIAÇÃO FISICA
                                    </h2>
                                    <ul>
                                        <li>098 - Paulo V. Mentani (Azul)</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="exame_medico" >
                                    <h2>
                                        EXAME MÉDICO
                                    </h2>
                                    <ul>
                                        <li>098 - Paulo V. Mentani (Azul)</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="mensalidade">
                                    <h2>
                                        PARCELA/MENSALIDADE ATRASADA
                                    </h2>
                                    <ul>
                                        <li>098 - Paulo V. Mentani (Azul)</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                        </section>
                    </div>

                </section>
            </div>
        </>

    );

}

