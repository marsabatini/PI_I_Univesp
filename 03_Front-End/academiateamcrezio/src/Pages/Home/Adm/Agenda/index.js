import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./agenda.modules.css";
import Gerenciador_ADM from "../../../Components/Gerenciador";
import Header from "../../../Components/Header";


export default function Agenda() {


    return (

        <>

            <div>
                <section>
                    <div class="caixa">
                        <Gerenciador_ADM/>
                        <section className="conteudo_gerenciado">
                            <div className="h4">
                                <h3>
                                    AGENDA COMUM
                                </h3>
                            </div>

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
                                            <h2 className="current-date"></h2>
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
                                            <ul className="days"></ul>
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
                                    <div>
                                        <h2 className="titulos">
                                            AGENDA COMUM - PÚBLICA
                                        </h2>
                                    </div>
                                    <div className="Titulo_Semana">
                                        <div className="semana_anterior">
                                            <span id="prevWeek" className="material-symbols-rounded">chevron_left</span>
                                            <h2>Semana Anterior</h2>
                                        </div>
                                        <div className="semana_posterior">
                                            <h2>Próxima Semana</h2>
                                            <span id="nextWeek" className="material-symbols-rounded">chevron_right</span>
                                        </div>
                                    </div>
                                    <div className="Agenda_Publica">
                                        <div className="horario">
                                            <ul></ul>
                                        </div>

                                        <div className="Semana-Dia-Atual">
                                            <ul className="dia_semana"></ul>
                                            <ul className="aula"></ul>
                                            <div className="alter_aula" id="alter_aula">
                                                <div className="check_buttons">
                                                    <div>
                                                        <input type="checkbox" className="liga_desliga__checkbox" id="liga_desliga"/>
                                                            <label for="liga_desliga" className="liga_desliga__botao"></label>
                                                            <p>Trancado</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" className="liga_desliga__checkbox" id="once"/>
                                                            <label for="once" className="once_all_button"></label>
                                                            <p>Só desta vez</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" className="liga_desliga__checkbox" id="all"/>
                                                            <label for="all" className="once_all_button"></label>
                                                            <p>Sempre</p>
                                                    </div>
                                                </div>

                                                <h2 id="nome_aula"></h2>

                                                <div>
                                                    <form action="" className="modalidade">
                                                        <select className="modalidade" id="modalidade_aula">
                                                            <option value="Vazio">Vazio</option>
                                                            <option value="Boxe">Boxe</option>
                                                            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                                            <option value="Self-Defense">Self-Defense</option>
                                                            <option value="Muay-Thay">Muay-Thay</option>
                                                            <option value="Kids">Kids</option>
                                                            <option value="Teen">Teen</option>
                                                        </select>
                                                        <p className="inscritos">0 INSCRITOS DE 8 VAGAS</p>
                                                        <div className="alter_professor">
                                                            <p>Responsável:</p>
                                                            <select>
                                                                <option value="Professor">Professor</option>
                                                                <option value="Eduardo">Eduardo</option>
                                                                <option value="Everton">Everton</option>
                                                            </select>
                                                        </div>
                                                        <div className="alter_participantes">

                                                            <div id="aluno_1">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_2">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_3">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_4">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_5">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_6">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_7">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                            <div id="aluno_8">
                                                                <label>Aluno:</label>
                                                                <input placeholder="Pesquisa"></input>
                                                                <button type="submit">Adicionar</button>
                                                            </div>

                                                        </div>
                                                    </form>
                                                    <div className="salvar_fechar">
                                                        <button type="submit" className="cancelar_button" id="Cancelar" onclick="handlePopup(false)">CANCELAR</button>
                                                        <button type="submit" className="salvar_button" id="Salvar">SALVAR</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alter_modalidade">
                                        <div>
                                            <form >
                                                <input id="cor_modalidade" name="cor_modalidade" type="text" placeholder="digite uma nova modalidade"></input>
                                                <button className="Inserir_Excluir" type="submit" id="inserir" name="inserir">Inserir</button>
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
                                </div>
                            </div>

                        </section>
                    </div>
                     
                </section>
            </div>
            
        </>

        

    );

    

}



