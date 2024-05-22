import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import api from '../../../Services/Api';

import logo from "../../../Assets/logopng.png"



export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId]       = useState('');
    const [nome, setNome]   = useState('');
    const [role, setRole]   = useState('');

    const navigate = useNavigate();


    async function Login(e) {
        e.preventDefault();

        const data = {
            email,
            senha
        };

        try {
            const response = await api.post('api/login', data);

            localStorage.setItem('email', email);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('nome', response.data.nome);
            localStorage.setItem('acessToken', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('role', response.data.role);

            // Precisaremos fazer a lógica para, caso seja funcionário ou aluno
            if (response.data.role == "ALUNO") {
                navigate('/perfil')
            } else if (response.data.role == "ADM") {
                navigate('/adm')
            } else if (response.data.role == "PROFESSOR" || response.data.role == "TREINADOR") {
                navigate('/funcionario')
            } else {
                alert("Usuário não encontrado!!!!!!!");
            }
        } catch (err) {
            // mensagemErro('Usuário e/ou senha inválido(s).')
            alert("Usuário desconhecido")
        }
    };


    return (
        <div>
            <section>
                <Header/>
                <div class="container">
                    <div className="cadastro">
                        <div className="flexz">
                            <img src={logo} alt="logo tc" />
                            <p> Caso não seja cadastrado ainda, crie sua conta!</p>
                            <a href="">
                                <button class="c-bnt">cadastrar</button>
                            </a>
                        </div>
                    </div>
                    <div className="login-column">
                        <form className="login" onSubmit={Login}>
                            <h2>entre em seu cadastro </h2>
                            <div className="caixa-u">
                                <input
                                    title="Digite seu e-mail."
                                    type="text"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="E-mail"
                                    required
                                />
                                <label>Usuario</label>
                            </div>
                            <div className="caixa-u">
                                <input
                                    title="Digite sua senha."
                                    type="password"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                    placeholder="Senha"
                                    required
                                />
                                <label>Senha</label>
                            </div>
                            <div className="esquecerSenha">
                                <Link className="esqueceu" to="/Redefinir_Senha"> Esqueci a senha </Link>
                            </div>
                            <a href="" className="b-ent">
                                <button type="submit" className="l-bnt">Entrar</button>
                            </a>
                        </form>
                    </div>
                </div>
                <Footer/>
            </section >
        </div >
    );
}

