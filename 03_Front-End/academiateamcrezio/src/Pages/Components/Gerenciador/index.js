import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "../../Home/Adm/Agenda/agenda.modules.css";

function Gerenciador_ADM() {

    return (

        <>
            <section class="menu_gerenciador">
                <div className="gerenciador">
                    <div>
                        <h2 className="titulo_gerenciador" >Gerenciador</h2>
                    </div>
                    <div>
                        <ul>
                            <li> <a Link className="">Avisos e Eventos         </a> </li>
                            <li> <a Link className="">Alertas                  </a> </li>
                            <li> <a Link className="">Chat                     </a> </li>
                            <li> <a Link className="">Agenda Comum             </a> </li>
                            <li> <a Link className="">Agenda Personal          </a> </li>
                            <li> <a Link className="">Presença                 </a> </li>
                            <li> <a Link className="">Cadastros                </a> </li>
                            <li> <a Link className="">Planos                   </a> </li>
                            <li> <a Link className="">Perfis                   </a> </li>
                            <li> <a Link className="">Mural                    </a> </li>
                            <li> <a Link className="">Loja Física              </a> </li>
                            <li> <a Link className="">Professores e Treinadores</a> </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );

}

export default Gerenciador_ADM;