import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../../../Services/Api";

import style_aluno from "./aluno.modules.css";
import foto_perfil from "../../../Assets/fotoperfil.jpeg";

import Header from "../../Components/Header_Logado";
import Footer from "../../Components/Footer";

export default function Aluno() {

    const [userData, setUserData] = useState({});
    const [email, setEmail] = useState({});
    const [senha, setSenha] = useState({});

    // {leo123@gmail.com,Leo-2308}, {lucarmo@gmail.com,lucarmo-2308}

    
    useEffect(() => {
        // EXPLICAÇÃO: função que após a api do login retornar o Json com os dados do aluno
        // a constante 'storageUserData' coleta o dados Json do localstorage que nomeei de 
        // userData verifica se há dados com o if/else e nos spans lá em baixo, é distribuído como
        // {userData?.nomeSobrenome} etc.
        const carregarDados = async () => {

            const storageUserData = JSON.parse(localStorage.getItem('userData'))

            

            if (storageUserData) {
                setUserData(storageUserData);
            } else {
                alert('Não foi possível carregar os dados...')
            }
        };

        carregarDados();

    }, []);



    async function OpenInfo(divison, downArrow, oldClass, newClass) {

        let arrow = document.getElementById(downArrow),
            div = document.getElementById(divison);


        if (div.className == oldClass) {

            div.className = newClass;
            arrow.className = "bi bi-caret-up-fill";

        } else {

            div.className = oldClass;
            arrow.className = "bi bi-caret-down-fill";
        }
    }


    return (

        <>

            <section className="section_perfil_aluno">
                <Header />

                <div class="container_aluno">
                    <div className="foto-p">
                        <img src={foto_perfil} alt="" />
                        <span className="notificação_aluno_ft"> notificações importantes:</span> {/* RESPONSIVIDADE */}
                    </div>

                    <div className="dados_aluno">
                        <div id="dados_aluno" className="info_responsivo"> {/* RESPONSIVIDADE */}
                            <div className="dados_title">
                                <h2> Dados Pessoais </h2>
                                <i onClick= {() => OpenInfo('dados_aluno','hidden_dados','info_responsivo','open_dados_aluno')} id="hidden_dados" class="bi bi-caret-down-fill"></i>
                                
                            </div>
                            <span >nome: {userData?.nomeSobrenome || "N/A"}</span>
                            <span >email: {userData?.email || "N/A"}</span>
                            <span >telefone: {userData?.telefone || "N/A"}</span>
                            <span >graduação: {userData?.graduacao || "N/A"}</span>
                            <span >aulas para troca de graduação: {userData?.aulas_prox_graduacao || "N/A"}</span>
                            <span >status plano: {userData?.statusPlano || "N/A"}</span>
                            <span >plano: {userData?.plano || "N/A"}</span>
                            <span >sexo: {userData?.sexo || "N/A"}</span>
                            <span >data de nascimento: {userData?.dataNascimento || "N/A"}</span>
                            <span >validade de exame medico: {userData?.exameMedico || "N/A"}</span>
                        </div>

                        <div className="info">
                            <span>nome: {userData?.nomeSobrenome || "N/A"}</span>
                            <span>email: {userData?.email || "N/A"}</span>
                            <span>telefone: {userData?.telefone || "N/A"}</span>
                            <span>graduação: {userData?.graduacao || "N/A"}</span>
                            <span>aulas para troca de graduação: {userData?.aulas_prox_graduacao || "N/A"}</span>
                        </div>
                        <div className="info">
                            <span>status plano: {userData?.statusPlano || "N/A"}</span>
                            <span>plano: {userData?.plano || "N/A"}</span>
                            <span>sexo: {userData?.sexo || "N/A"}</span>
                            <span>data de nascimento: {userData?.dataNascimento || "N/A"}</span>
                            <span>validade de exame medico: {userData?.exameMedico || "N/A"}</span>
                        </div>
                    </div>

                </div>
                <span className="notificação_aluno"> notificações importantes:</span>
                <span className="linha"></span>
                <div className="containerb">
                    <div id="aulas_marcadas" className="marcadas">

                        <div className="marcadas_title">
                            <h2>proximas aulas</h2>
                            <i id="hidden_aulas" onClick={() => OpenInfo('aulas_marcadas','hidden_aulas','marcadas','open_aulas')} class="bi bi-caret-down-fill"></i>
                        </div>

                        <span>segunda:</span>
                        <span>terça:</span>
                        <span>quarta:</span>
                        <span>quinta:</span>
                        <span>sexta:</span>
                        <span>sábado:</span>
                    </div>
                    <div className="botoes">

                        <div>
                            <Link to="/agenda_aluno"><button>agende suas proximas aulas</button></Link>
                        </div>

                        <div className="doc_buttons">
                            <a Link=""><button>avaliação fisica</button></a>
                            <a Link=""><button>exame medico</button></a>
                            <a Link=""><button>graduação</button></a>
                        </div>
                    </div>
                    <div id="avisos" className="avisos_aluno">
                        <div className="avisos_aluno_title">
                            <h2>avisos importantes</h2>
                            <i id="hidden_avisos" onClick={() => OpenInfo('avisos','hidden_avisos','avisos_aluno','open_avisos')} class="bi bi-caret-down-fill"></i>
                        </div>
                        <ul>
                            <li>Evento no ibirapuera dia 20/05/2024</li>
                        </ul>
                    </div>
                </div>

            </section>
            <Footer />

        </>

    );


}
