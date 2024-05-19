import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


import "./mural.modules.css";
import Gerenciador_ADM from "../../../Components/Gerenciador";

export default function Mural() {


    return (

        <>
            <div>
                <section>

                    <div class="caixa">
                        <Gerenciador_ADM/>
                        <section className="section">
                            <div className="h3">
                                <h3>
                                    Mural
                                </h3>
                            </div>

                            <div className="container">
                                <div className="preview-image">
                                    <img data-image-preview />
                                </div>
                                <form className="form">
                                    <div className="imagem">
                                        <label for="imagem"> selecione imagem</label>
                                        <input type="file" id="imagem" data-image-input required />
                                    </div>
                                    <div className="legenda">
                                        <input type="text" placeholder="legenda da imagem" />
                                    </div>
                                    <button className="upload_imagem">Enviar</button>
                                </form>

                                <script src="jsteste.js"></script>
                            </div>
                        </section>

                    </div>

                        </section>
                    </div>
                </>

            );

}

