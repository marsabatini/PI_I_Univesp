import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./avisos.modules.css";
import Gerenciador_ADM from "../../../Components/Gerenciador";
import lixo from "../../../../Assets/trash.png";

export default function Avisos() {

    return (

        <>
            <div>
                <section>
                    <div class="caixa">
                        <Gerenciador_ADM/>
                        <section class="warning_section">
                            <div className="h3">
                                <h3>
                                    AVISOS E EVENTOS
                                </h3>
                            </div>
                            <div className="avisos">
                                <h2>
                                    Avisos e Eventos
                                </h2>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales viverra elit, in gravida nisi gravida vitae.<img src={lixo} className="trash"/> </li>
                                    <li>Sed ultrices dolor in justo viverra fringilla. Nullam in volutpat erat. <img src={lixo} className="trash"/> </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales viverra elit, in gravida nisi gravida vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. <img src={lixo} className="trash"/> </li>
                                    <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. <img src={lixo} className="trash"/> </li>
                                    <li>Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, <img src={lixo} className="trash"/> </li>
                                    <li>consectetur adipiscing elit. <img src={lixo} className="trash"/> </li>
                                </ul>

                            </div>
                            <form action="" className="inserção_avisos">
                                <input type="text" id="inserção" name="inserção" placeholder="Insira um novo aviso aqui"></input>
                                <button type="button" value="Enviar">Enviar</button>
                            </form>
                        </section>
                    </div>

                </section>
            </div>
        </>

    );

}




