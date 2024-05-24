import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import style_agenda_aluno from "./agenda_aluno.modules.css";

import Aulas from "../../Components/Aulas";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Agenda_Aluno() {


    return (

        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
            <div>
                <section>

                    <div class="caixa_agenda_aluno">
                        <Header />

                        <section className="section_agenda_aluno">
                            <div className="agenda">
                                <div className="consulta_modalidade">

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
                                            AGENDA DO FULANO
                                        </h2>
                                    </div>

                                    <div className="agenda_alunos">
                                        <ul>
                                            <li>Agenda do Aluno...</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="Agendamento">

                                    <h2 className="titulos">
                                        AGENDA COMUM - PÚBLICA
                                    </h2>

                                    <div className="Agenda_Publica">

                                        <div>


                                            <ul className="header_agenda_aluno">
                                                <li>Data</li>
                                                <li>Horario</li>
                                                <li>Modalidade</li>
                                                <li>Professor</li>
                                                <li>Qtd Limite de Inscrições</li>
                                                <li>Inscritos</li>
                                                <li>Vagas</li>
                                                <li>Status</li>
                                            </ul>
                                            <div className="lista_aulas">
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                                <Aulas />
                                               
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>

                        </section>
                    </div>
                    <Footer />
                </section>
            </div>

        </>



    );



}



