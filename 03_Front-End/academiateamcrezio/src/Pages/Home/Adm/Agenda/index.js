import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import style_agenda from "./agenda.modules.css";

import Gerenciador_ADM from "../../../Components/Gerenciador";
import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Aulas_Adm from "../../../Components/Aulas_Adm";


export default function Agenda() {


    return (

        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
            <div>
                <section className="agenda_section">
                    <div class="caixa_agenda">
                        <Header />
                        <Gerenciador_ADM />
                        <section className="conteudo_gerenciado">

                            <h4 className="titulo_agenda">
                                AGENDA COMUM
                            </h4>


                            <div className="agenda">
                                <div className="consulta_modalidade">
                                    <div>
                                        <h2 className="titulos">
                                            AULA
                                        </h2>
                                    </div>
                                    <form>
                                        <select className="modalidade_input" id="modalidade" name="modalidade">
                                            <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                            <option value="Boxe">Boxe</option>
                                            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                            <option value="Self-Defense">Self-Defense</option>
                                            <option value="Muay-Thay">Muay-Thay</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Teen">Teen</option>
                                        </select>
                                    </form>
                                    <div className="menu_calendario">

                                        <div className="menu_calendario_data_atual">
                                            <span id="prev" className="material-symbols-rounded">chevron_left</span>
                                            <h2 className="current-date"> Maio 2024</h2>
                                            <span id="next" className="material-symbols-rounded">chevron_right</span>
                                        </div>

                                        <div className="calendar">
                                            <ul className="weeks">
                                                <li class="inactive">Domingo</li>
                                                <li>Segunda</li>
                                                <li>Terça</li>
                                                <li>Quarta</li>
                                                <li>Quinta</li>
                                                <li>Sexta</li>
                                                <li>Sábado</li>
                                            </ul>
                                            <ul className="days">
                                                <li className="inactive">28</li>
                                                <li className="inactive">29</li>
                                                <li className="inactive">30</li>
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>21</li>
                                                <li>22</li>
                                                <li>23</li>
                                                <li>24</li>
                                                <li>25</li>
                                                <li>26</li>
                                                <li>27</li>
                                                <li>28</li>
                                                <li>29</li>
                                                <li>30</li>
                                                <li>31</li>
                                                <li className="inactive">01</li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="separador">

                                </div>

                                <div className="consulta_modalidade">
                                    <div>
                                        <h2 className="titulos">
                                            ALUNO
                                        </h2>
                                    </div>
                                    <form>
                                        <select className="modalidade_input" id="filtro_modalidade" name="modalidade">
                                            <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                            <option value="Boxe">Boxe</option>
                                            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                            <option value="Self-Defense">Self-Defense</option>
                                            <option value="Muay-Thay">Muay-Thay</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Teen">Teen</option>
                                        </select>
                                    </form>
                                    <form>
                                        <input className="aluno_input" id="select_modalidade" name="modalidade" type="text" placeholder="Insira nome, sobrenome ou matricula(id)"></input>
                                        <div className="alunos">
                                            <ul>
                                                <li>Alunos ficarão aqui...</li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>

                                <div className="Agendamento">

                                    <h2 className="titulos">
                                        AGENDA COMUM - PÚBLICA
                                    </h2>

                                    <div className="Agenda_Publica">


                                        <div>


                                            <ul className="header_agenda">
                                                <li>Data</li>
                                                <li>Horario</li>
                                                <li>Modalidade</li>
                                                <li>Professor</li>
                                                <li>Qtd Limite de Inscrições</li>
                                                <li>Inscritos</li>
                                                <li>Vagas</li>
                                            </ul>
                                            <div className="lista_aulas">
                                                <Aulas_Adm/>
                                                
                                               

                                            </div>

                                        </div>



                                    </div>
                                    <div className="alter_modalidade">
                                        <div>
                                            <form >
                                                <input id="cor_modalidade" name="cor_modalidade" type="text" placeholder="digite uma nova modalidade"></input>
                                                <button className="Inserir_Excluir" type="submit" id="inserir_modalidade" name="inserir_modalidade">Inserir</button>
                                            </form>
                                        </div>

                                        <div>
                                            <form >
                                                <select className="modalidade" id="excluir_modalidade">
                                                    <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                                    <option value="Boxe">Boxe</option>
                                                    <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                                    <option value="Self-Defense">Self-Defense</option>
                                                    <option value="Muay-Thay">Muay-Thay</option>
                                                    <option value="Kids">Kids</option>
                                                    <option value="Teen">Teen</option>
                                                </select>
                                                <button className="Inserir_Excluir" type="submit" id="excluir" name="excluir">Excluir</button>
                                            </form>
                                        </div>

                                    </div>

                                    <h2 className="titulos">Inserir nova aula</h2>
                                        
                                        <form action="" className="inserir_nova_aula">
                                        <div>
                                            <div>
                                                <label for="iinput_data">Data</label>
                                                <input type="text" name="input_data" id="iinput_data"></input>
                                            </div>

                                            <div>
                                                <label for="iinput_hora">Horario</label>
                                                <input type="text" name="input_hora" id="iinput_hora"></input>
                                            </div>

                                            <div>
                                                <label for="iinput_modalidade">Modalidade</label>
                                                <select type="text" name="input_modalidade" id="iinput_modalidade">
                                                    <option value="Default" selected>Modalidade</option>
                                                    <option value="Boxe">Boxe</option>
                                                    <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                                    <option value="Self-Defense">Self-Defense</option>
                                                    <option value="Muay-Thay">Muay-Thay</option>
                                                    <option value="Kids">Kids</option>
                                                    <option value="Teen">Teen</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>

                                            <div>
                                                <label for="iinput_professor">Professor</label>
                                                <select type="text" name="input_professor" id="iinput_professor">
                                                    <option value="Default" selected>Professor</option>
                                                    <option value="Eduardo" selected>Eduardo</option>
                                                    <option value="Everton" selected>Everton</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label for="iinput_qtd_limite">Qtd Limite</label>
                                                <input type="text" name="input_qtd_limite" id="iinput_qtd_limite"></input>
                                            </div>

                                        </div>

                                        </form>
                                </div>
                            </div>
                        </section>
                        <Footer_Adm/>
                    </div>
                </section>
                
            </div>
            
        </>



    );



}



