import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foto_inicial from "../../Assets/fotoInicial.png";
import white_belt from "../../Assets/whiteBelt.jpeg";
import blue_belt from "../../Assets/blueBelt.jpeg";
import purple_belt from "../../Assets/purpleBelt.jpeg";
import kids from "../../Assets/kids.jpeg";
import single from "../../Assets/single.jpeg";
import triple from "../../Assets/triple.jpeg";
import single_plus from "../../Assets/single+.jpeg";
import triple_plus from "../../Assets/triple+.jpeg";
import bull from "../../Assets/fight_like_a_bull.png";
import tabela_horarios from "../../Assets/tabelaHorários.png";
import professores from "../../Assets/professores.png";
import black_belt from "../../Assets/blackBelt.jpeg";

import boxe from "../../Assets/Boxe.png";
import teen_kids from "../../Assets/teenKids.png";
import cross_training from "../../Assets/crossTraining.png";
import PFL from "../../Assets/PFL.png";
import self_defense from "../../Assets/selfDefense.png";
import personal_trainer from "../../Assets/personalTrainer.png";

import gabr_carv_pic from "../../Assets/grabriela_carvalho.png";
import eli_braz_pic from "../../Assets/eli_braz.png";
import eduardo_pic from "../../Assets/eduardo.png";

import item_1 from "../../Assets/loja1.png";
import item_2 from "../../Assets/loja2.png";
import item_3 from "../../Assets/loja3.png";
import item_4 from "../../Assets/loja4.png";

import item_mural_1 from "../../Assets/mural1.png";
import item_mural_2 from "../../Assets/mural2.png";
import item_mural_3 from "../../Assets/mural3.png";
import item_mural_4 from "../../Assets/mural4.png";

import nossos_parceiros from "../../Assets/nossosParceiros.png";

// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";


import "./styles.css";


import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function Inicio() {



    return (

        <div>
            <container>
                <section className="home_section">
                    <Header />

                    <main className="conteudo">
                        <div className="quadro_imagem_inicial"><br />

                            <img src={foto_inicial} className="boas-vindas" />

                        </div>

                        <div className="aula_experimental_home">
                           <Link to="/aula_experimental"> <button >Marque Agora uma <br /> Aula Experimental</button></Link>
                        </div>

                        <div>
                            <div>
                                <span className="planoTeamCrezio">PLANOS<br /> TEAM CREZIO</span>
                            </div>

                            <div className="planos">
                                <div className="imgPlanos">
                                    <img src={white_belt}/>
                                    <img src={blue_belt}/>
                                    <img src={purple_belt}/>
                                    <img src={kids}/>
                                    <img src={black_belt}/>
                                    <img src={single}/>
                                    <img src={single_plus}/>
                                    <img src={triple}/>
                                    <img src={triple_plus}/>

                                </div>
                            </div>
                        </div>

                        <div className="bull">
                            <img src={bull} />
                        </div>
                

                        <div>
                            <span className="mestres">TREINE COM NOSSO MESTRES</span>
                        </div>

                        <div className="professores">
                            <div className="foto-professores">
                                <img src={gabr_carv_pic} />
                                <img src={eli_braz_pic} />
                                <img src={eduardo_pic} />
                            </div>
                        </div>
                        
                        
                            <span className="modalidades">MAIS MODALIDADES</span>
                            <div className="fotos-modalidades">
                                <div className="gallery-container">
                                    <a href="" className="gallery-items">
                                        <img src={cross_training} alt="croos-training" />
                                    </a>
                                    <a href="" className="gallery-items">
                                        <img src={teen_kids} alt="teen-kids" />
                                    </a>
                                    <a href="" className="gallery-items">
                                        <img src={boxe} alt="boxe-aula" />
                                    </a>
                                    <a href="" className="gallery-items">
                                        <img src={PFL} alt="p-f-l" />
                                    </a>
                                    <a href="" className="gallery-items">
                                        <img src={self_defense} alt="self-defense" />
                                    </a>
                                    <a href="" className="gallery-items">
                                        <img src={personal_trainer} alt="personal-trainer" />
                                    </a>

                                </div>
                            </div>
                       

                        
                        <span className="tabela">AGENDA SEMANAL</span>
                            <div className="agenda-Semanal">
                                <img src={tabela_horarios} />
                            </div>
                        
                        <div className="botão-matriculese">
                            <Link to="/cadastro"><button>Matricule-se Agora</button></Link>
                        </div>
                        

                        
                        <span className="loja">CONHEÇA NOSSA LOJA</span>

                            <div className="foto-loja">
                                <div className="images">
                                    <img src={item_1}  alt="imagem1" />
                                    <img src={item_2}  alt="imagem2" />
                                    <img src={item_3}  alt="imagem3" />
                                    <img src={item_4}  alt="imagem4" />
                                </div>

                            </div>
               
                        
                            <span className="mural">MURAL</span>

                            <div className="corpoMural">
                                <div className="slider-2">
                                    <div className="images-2">
                                        <input type="radio" name="slide-2" id="img01" defaultChecked/>
                                        <input type="radio" name="slide-2" id="img02" />
                                        <input type="radio" name="slide-2" id="img03" />
                                        {/* <input type="radio" name="slide-2" id="img04" /> */}

                                        <img src={item_mural_1} className="m01" alt="img01" />
                                        <img src={item_mural_2} className="m02" alt="img02" />
                                        <img src={item_mural_3} className="m03" alt="img03" />
                                        {/* <img src={item_mural_4} className="m04" alt="img04" /> */}
                                    </div>
                                    <div className="dots-2">
                                        <label for="img01"></label>
                                        <label for="img02"></label>
                                        <label for="img03"></label>
                                        {/* <label for="img04"></label> */}
                                    </div>
                                </div>
                            </div>

                        <section className="section11">
                            <div className="fotos-parceiros">
                                <img src={nossos_parceiros} />
                            </div>
                        </section>

                    </main>





                    {/* <Link to="/login">login</Link><br/>
                            <Link to="/Adm/agenda">Agenda</Link><br/>
                            <Link to="/Adm/alertas">Alertas</Link><br/>
                            <Link to="/Adm/avisos">Avisos</Link><br/>
                            <Link to="/Adm/perfis">Perfis</Link><br/>
                            <Link to="/Adm/mural">Mural</Link><br/>
                            <Link to="/Adm/cadastro_gerais">Cadastro_Gerais</Link><br/>
                            <Link to="/aluno">Aluno</Link><br/>
                            <Link to="/aula_Experimental">Aula_Experimental</Link><br/>
                            <Link to="/planos">Planos</Link><br/>
                            <Link to="/nova_Senha">Nova_Senha</Link><br/>
                            <Link to="/agenda_Aluno">Agenda_Aluno</Link><br/>
                            <Link to="/cadastro">Cadastro</Link><br/> */}


                    <Footer />
                </section>
            </container>
        </div>

    );

}
