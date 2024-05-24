import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

import "./styles.css";


import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function Inicio() {



    return ( 
        
            <div>
                <container>
                    <section>
                        <Header/>
                                    
                        <main class="conteudo">
            <section class="section1"><br/>
                    <div class="boas-vindas">
                        <figure><img src="img/fotoInicial.png"/></figure>
                    </div>
            </section>

            <section class="section2">
                <button class="botao-aula-experimental"><h5>Marque Agora</h5><h4>Uma Aula Experimental</h4></button>
            </section>

            <section class="section3">
                
                    
                    <div>
                        <span class="planoTeamCrezio">PLANOS TEAM CREZIO</span>
                    </div>
                    <div class="planos">
                        <span class="slider" id="slider1"></span>
                        <span class="slider" id="slider2"></span>
                        <span class="slider" id="slider3"></span>
                        <span class="slider" id="slider4"></span>
                        <span class="slider" id="slider5"></span>
                        <span class="slider" id="slider6"></span>
                        <span class="slider" id="slider7"></span>
                        <span class="slider" id="slider8"></span>
                        <span class="slider" id="slider9"></span>
                        <span class="slider" id="slider10"></span>
                
                        <div class="imgPlanos">
                
                           <div class="slide_div" id="slide_1">
                            <img src="img/whiteBelt.jpeg" alt="white-belt" class="img" id="img1"/>
                            <a href="#slider1" class="button" id="button1"></a>
                           </div>
                           <div class="slide_div" id="slide_2">
                            <img src="img/blueBelt.jpeg" alt="blue-belt" class="img" id="img2"/>
                            <a href="#slider2" class="button" id="button2"></a>
                           </div>
                           <div class="slide_div" id="slide_3">
                            <img src="img/purpleBelt.jpeg" alt="purple-belt" class="img" id="img3"/>
                            <a href="#slider3" class="button" id="button3"></a>
                           </div>
                           <div class="slide_div" id="slide_4">
                            <img src="img/kids.jpeg" alt="kids" class="img" id="img4"/>
                            <a href="#slider4" class="button" id="button4"></a>
                           </div>
                           <div class="slide_div" id="slide_5">
                            <img src="img/single.jpeg" alt="single" class="img" id="img5"/>
                            <a href="#slider5" class="button" id="button5"></a>
                           </div>
                           <div class="slide_div" id="slide_6">
                            <img src="img/triple.jpeg" alt="triple" class="img" id="img6"/>
                            <a href="#slider6" class="button" id="button6"></a>
                           </div>
                           <div class="slide_div" id="slide_7">
                            <img src="img/blackBelt.jpeg" alt="black-belt" class="img" id="img7"/>
                            <a href="#slider7" class="button" id="button7"></a>
                           </div>
                           <div class="slide_div" id="slide_8">
                            <img src="img/superKids.jpeg" alt="super-kids" class="img" id="img8"/>
                            <a href="#slider8" class="button" id="button8"></a>
                           </div>
                           <div class="slide_div" id="slide_9">
                            <img src="img/single+.jpeg" alt="single+" class="img" id="img9"/>
                            <a href="#slider9" class="button" id="button9"></a>
                           </div>
                           <div class="slide_div" id="slide_10">
                            <img src="img/triple+.jpeg" alt="triple+" class="img" id="img10"/>
                            <a href="#slider10" class="button" id="button10"></a>
                           </div>
                        </div>
                    </div>
                    
            </section>

            <section class="section4">
                <div class="bull">
                    <figure><img src="img/fight like a bull.png"/></figure>
                </div>
            </section>

            <section class="section5">
                <span class="mestres">TREINE COM NOSSO MESTRES</span>
                <div class="foto-professores">
                    <figure><img src="img/professores.png"/></figure>
                </div>
            </section>

            <section class="section6">
                <span class="modalidades">MAIS MODALIDADES</span>
                <div class="fotos-modalidades">
                        <div class="gallery-container">
                            <a href="" class="gallery-items">
                                <img src="img/crossTraining.png" alt="croos-training"/>
                            </a>
                            <a href="" class="gallery-items">
                                <img src="img/teenKids.png" alt="teen-kids"/>
                            </a>
                            <a href="" class="gallery-items">
                                <img src="img/Boxe.png" alt="boxe-aula"/>
                            </a>
                            <a href="" class="gallery-items">
                                <img src="img/PFL.png" alt="p-f-l"/>
                            </a>
                            <a href="" class="gallery-items">
                                <img src="img/selfDefense.png" alt="self-defense"/>
                            </a>
                            <a href="" class="gallery-items">
                                <img src="img/personalTrainer.png" alt="personal-trainer"/>
                            </a>
                
                        </div>        
                </div>
            </section>

            <section class="section7">
                <span class="tabela">AGENDA SEMANAL</span>
                <div class="agenda-Semanal">
                    <figure><img src="img/tabelaHorários.png"/></figure>
                </div>
            </section>

            <section class="section8">
                <div class="botão-matriculese">
                    <button><h4>Matricule-se Agora</h4></button>
                </div>
            </section>

            <section class="section9">
                <span class="loja">CONHEÇA NOSSA LOJA</span>

                <div class="carrosel">
                    <div class="images">
                        <input type="radio" name="slide" id="imagem1"/>
                        <input type="radio" name="slide" id="imagem2"/>
                        <input type="radio" name="slide" id="imagem3"/>
                        <input type="radio" name="slide" id="imagem4"/>
            
                        <img src="img/loja1.png" class="m1" alt="imagem1"/>
                        <img src="img/loja2.png" class="m2" alt="imagem2"/>
                        <img src="img/loja3.png" class="m3" alt="imagem3"/>
                        <img src="img/loja4.png" class="m4" alt="imagem4"/>
                    </div>
                    <div class="dots">
                        <label for="imagem1"></label>
                        <label for="imagem2"></label>
                    </div>
                </div>

            </section>

            <section class="section10">
                <span class="mural">MURAL</span>

                <div class="corpoMural">
                    <div class="slider-2">
                        <div class="images-2">
                            <input type="radio" name="slide-2" id="img01" checked/>
                            <input type="radio" name="slide-2" id="img02"/>
                            <input type="radio" name="slide-2" id="img03"/>
                            <input type="radio" name="slide-2" id="img04"/>
                
                            <img src="img/mural1.png" class="m01" alt="img01"/>
                            <img src="img/mural2.png" class="m02" alt="img02"/>
                            <img src="img/mural3.png" class="m03" alt="img03"/>
                            <img src="img/mural4.png" class="m04" alt="img04"/>
                        </div>
                        <div class="dots-2">
                            <label for="img01"></label>
                            <label for="img02"></label>
                            <label for="img03"></label>
                            <label for="img04"></label>
                        </div>
                    </div>
                </div>                
            </section>

            <section class="section11">
                <div class="fotos-parceiros">
                    <figure><img src="img/nossosParceiros.png"/></figure>
                </div>
            </section>

        </main>

                            {/* <Link to="/login">login  </Link><br/>
                            <Link to="/Agenda">Agenda</Link><br/>
                            <Link to="/Alertas">Alertas</Link><br/>
                            <Link to="/Avisos">Avisos</Link><br/>
                            <Link to="/Cadastros">Cadastros</Link><br/>
                            <Link to="/Mural">Mural</Link><br/>
                            <Link to="/Aluno">Aluno</Link><br/>
                            <Link to="/Aula_Experimental">Aula_Experimental</Link><br/>
                            <Link to="/Planos">Planos</Link><br/>
                            <Link to="/Nova_Senha">Nova_Senha</Link><br/> */}

                        <Footer/>
                    </section>
                </container>
            </div>
      
    );

}
