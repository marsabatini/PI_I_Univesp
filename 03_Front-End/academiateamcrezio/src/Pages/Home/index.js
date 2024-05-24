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
                    <section>
                        <Header/>
                       
                        <main className="conteudo">
            <section className="section1"><br/>
                    <div className="boas-vindas">
                        <img src={foto_inicial}/>
                    </div>
            </section>

            <section className="section2">
                <button className="botao-aula-experimental">Marque Agora Uma Aula Experimental</button>
            </section>

            <section className="section3">
                
                    
                    <div>
                        <span className="planoTeamCrezio">PLANOS TEAM CREZIO</span>
                    </div>
                    <div className="planos">
                        <span className="slider" id="slider1"></span>
                        <span className="slider" id="slider2"></span>
                        <span className="slider" id="slider3"></span>
                        <span className="slider" id="slider4"></span>
                        <span className="slider" id="slider5"></span>
                        <span className="slider" id="slider6"></span>
                        <span className="slider" id="slider7"></span>
                        <span className="slider" id="slider8"></span>
                        <span className="slider" id="slider9"></span>
                        <span className="slider" id="slider10"></span>
                
                        <div className="imgPlanos">
                
                           <div className="slide_div" id="slide_1">
                            <img src={white_belt} alt="white-belt" className="img" id="img1"/>
                            <a href="#slider1" className="button" id="button1"></a>
                           </div>
                           <div className="slide_div" id="slide_2">
                            <img src={blue_belt} alt="blue-belt" className="img" id="img2"/>
                            <a href="#slider2" className="button" id="button2"></a>
                           </div>
                           <div className="slide_div" id="slide_3">
                            <img src={purple_belt} alt="purple-belt" className="img" id="img3"/>
                            <a href="#slider3" className="button" id="button3"></a>
                           </div>
                           <div className="slide_div" id="slide_4">
                            <img src={kids} alt="kids" className="img" id="img4"/>
                            <a href="#slider4" className="button" id="button4"></a>
                           </div>
                           <div className="slide_div" id="slide_5">
                            <img src={single} alt="single" className="img" id="img5"/>
                            <a href="#slider5" className="button" id="button5"></a>
                           </div>
                           <div className="slide_div" id="slide_6">
                            <img src={triple} alt="triple" className="img" id="img6"/>
                            <a href="#slider6" className="button" id="button6"></a>
                           </div>
                           <div className="slide_div" id="slide_7">
                            <img src="img/blackBelt.jpeg" alt="black-belt" className="img" id="img7"/>
                            <a href="#slider7" className="button" id="button7"></a>
                           </div>
                           <div className="slide_div" id="slide_8">
                            <img src="img/superKids.jpeg" alt="super-kids" className="img" id="img8"/>
                            <a href="#slider8" className="button" id="button8"></a>
                           </div>
                           <div className="slide_div" id="slide_9">
                            <img src="img/single+.jpeg" alt="single+" className="img" id="img9"/>
                            <a href="#slider9" className="button" id="button9"></a>
                           </div>
                           <div className="slide_div" id="slide_10">
                            <img src="img/triple+.jpeg" alt="triple+" className="img" id="img10"/>
                            <a href="#slider10" className="button" id="button10"></a>
                           </div>
                        </div>
                    </div>
                    
            </section>

            <section className="section4">
                <div className="bull">
                    <figure><img src="img/fight_like_a_bull.png"/></figure>
                </div>
            </section>

            <section className="section5">
                <span className="mestres">TREINE COM NOSSO MESTRES</span>
                <div className="foto-professores">
                    <figure><img src="img/professores.png"/></figure>
                </div>
            </section>

            <section className="section6">
                <span className="modalidades">MAIS MODALIDADES</span>
                <div className="fotos-modalidades">
                        <div className="gallery-container">
                            <a href="" className="gallery-items">
                                <img src="img/crossTraining.png" alt="croos-training"/>
                            </a>
                            <a href="" className="gallery-items">
                                <img src="img/teenKids.png" alt="teen-kids"/>
                            </a>
                            <a href="" className="gallery-items">
                                <img src="img/Boxe.png" alt="boxe-aula"/>
                            </a>
                            <a href="" className="gallery-items">
                                <img src="img/PFL.png" alt="p-f-l"/>
                            </a>
                            <a href="" className="gallery-items">
                                <img src="img/selfDefense.png" alt="self-defense"/>
                            </a>
                            <a href="" className="gallery-items">
                                <img src="img/personalTrainer.png" alt="personal-trainer"/>
                            </a>
                
                        </div>        
                </div>
            </section>

            <section className="section7">
                <span className="tabela">AGENDA SEMANAL</span>
                <div className="agenda-Semanal">
                    <figure><img src="img/tabelaHorários.png"/></figure>
                </div>
            </section>

            <section className="section8">
                <div className="botão-matriculese">
                    <button><h4>Matricule-se Agora</h4></button>
                </div>
            </section>

            <section className="section9">
                <span className="loja">CONHEÇA NOSSA LOJA</span>

                <div className="carrosel">
                    <div className="images">
                        <input type="radio" name="slide" id="imagem1"/>
                        <input type="radio" name="slide" id="imagem2"/>
                        <input type="radio" name="slide" id="imagem3"/>
                        <input type="radio" name="slide" id="imagem4"/>
            
                        <img src="img/loja1.png" className="m1" alt="imagem1"/>
                        <img src="img/loja2.png" className="m2" alt="imagem2"/>
                        <img src="img/loja3.png" className="m3" alt="imagem3"/>
                        <img src="img/loja4.png" className="m4" alt="imagem4"/>
                    </div>
                    <div className="dots">
                        <label for="imagem1"></label>
                        <label for="imagem2"></label>
                    </div>
                </div>

            </section>

            <section className="section10">
                <span className="mural">MURAL</span>

                <div className="corpoMural">
                    <div className="slider-2">
                        <div className="images-2">
                            <input type="radio" name="slide-2" id="img01" checked/>
                            <input type="radio" name="slide-2" id="img02"/>
                            <input type="radio" name="slide-2" id="img03"/>
                            <input type="radio" name="slide-2" id="img04"/>
                
                            <img src="img/mural1.png" className="m01" alt="img01"/>
                            <img src="img/mural2.png" className="m02" alt="img02"/>
                            <img src="img/mural3.png" className="m03" alt="img03"/>
                            <img src="img/mural4.png" className="m04" alt="img04"/>
                        </div>
                        <div className="dots-2">
                            <label for="img01"></label>
                            <label for="img02"></label>
                            <label for="img03"></label>
                            <label for="img04"></label>
                        </div>
                    </div>
                </div>                
            </section>

            <section className="section11">
                <div className="fotos-parceiros">
                    <figure><img src="img/nossosParceiros.png"/></figure>
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


                        <Footer/>
                    </section>
                </container>
            </div>
      
    );

}
