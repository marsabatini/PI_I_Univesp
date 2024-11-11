import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import style_agenda_aluno from "./agenda_aluno.modules.css";

import Aulas from "../../Components/Aulas";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import api from "../../../Services/Api";

export default function Agenda_Aluno() {

    const [classData, setClassData] = useState([]);
    const [aulasMarcadas, setAulasMarcadas] = useState([])

    async function retornarAgendaAluno() {
        
        
        try {
            const response = await api.get('adm/aulas');
            const classData = response.data;
            
            setClassData(classData);
            
            
            localStorage.setItem('classData', response.data.classData)
            
            //carregar as aulas quando carregar a página
        
        } catch (error) {
            alert('Não foi possível carregar a agenda')
            
        }

        
    }

    async function carregarAulasAluno() {
        const idAluno = JSON.parse(localStorage.getItem('id'));

        try {
            const response = await api.get(`adm/aulas/aulasdoaluno/${idAluno}`);
            setAulasMarcadas(response.data.map(aula => aula.id));

        } catch (error) {
            alert('Não foi possível carregar as aulas do Aluno');
        }
        
    }

    async function marcarAula(idAula) {
        
        const idAluno = JSON.parse(localStorage.getItem('id'));


        try {
            await api.post(`adm/aulas/adicionaraluno/${idAluno}/${idAula}`);
            carregarAulasAluno();
            alert('Aula marcada.')
            
        } catch (err) {
            alert('Falha ao marcar a aula.')
        }

    }

    useEffect(() =>{
        retornarAgendaAluno();
        carregarAulasAluno();
    },[]);

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
                                        {aulasMarcadas.length > 0 ? (
                                            aulasMarcadas.map(aula => (
                                                <div key={aula.id}>
                                                    <span>{aula.dataHora}</span>
                                                    <span>{aula.modalidade}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Nenhuma aula marcada...</p>
                                        )}

                                        
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
                                            <div id="lista_aulas" className="lista_aulas_aluno">
                                                <table id="Semana-Dia-Atual" className="Semana-Dia-Atual">

                                                    <tbody>
                                                        {classData.map(aula => {
                                                            const isMarcada = aulasMarcadas.includes(aula.id);
                                                            const [dia, hora] = aula.dataHora.split('T');
                                                            return (
                                                                <tr key={aula.id} className="aula">
                                                                    <td className="atributo_aula">{dia}</td>
                                                                    <td className="atributo_aula">{hora}</td>
                                                                    <td className="atributo_aula">{aula.modalidade}</td>
                                                                    <td className="atributo_aula">{aula.funcionario}</td>
                                                                    <td className="atributo_aula">{aula.qtddLimiteAlunos}</td>
                                                                    <td className="atributo_aula">{aula.qtddLimiteAlunos}</td>
                                                                    <td className="atributo_aula">{aula.qtddLimiteAlunos}</td>
                                                                    <td>
                                                                        <button
                                                                            className={isMarcada ? 'remover_aluno' : 'inserir_aluno'}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                if (isMarcada) {
                                                                                    alert('Aula já está marcada')
                                                                                } else {
                                                                                    marcarAula(aula.id)
                                                                                }
                                                                            }}
                                                                        >
                                                                            {isMarcada ? 'Desmarcar Aula' : 'Agendar Aula'}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>

                                                </table>
                                               
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



