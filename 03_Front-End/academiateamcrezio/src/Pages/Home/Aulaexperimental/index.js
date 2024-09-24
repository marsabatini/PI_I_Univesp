import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./aula_experimental.modules.css";

import api from "../../../Services/Api";

export default function Aula_Experimental() {

    const [nomeCompleto, setNomecompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigate = useNavigate();

    async function cadastrarAlunoExperimental(e) {
        e.preventDefault();

        const data = {
            nomeCompleto,
            email,
            telefone
        }

        try {
            await api.post('/api/aulaexperimental', data);

            alert('Aluno experimental Cadastrado. Mas não está integrado com a agenda!!!!');

            navigate('/');
        } catch (err) {
            alert('Aluno experimental não cadastrado.');
        }
    }

    return (
        <>
            <div>
                <section>
                    <Header />
                    <h1>Faça uma aula experimental grátis</h1>
                    <div class="box">
                        <form className="form-aluno-experimental" onSubmit={cadastrarAlunoExperimental}>
                            <div className="box-u">
                                <label for="">Nome</label>
                                <input
                                    className="nome"
                                    title="Digite seu nome completo."
                                    name="nome"
                                    type="text"
                                    value={nomeCompleto}
                                    onChange={e => setNomecompleto(e.target.value)}
                                    placeholder="Nome completo"
                                    required
                                />
                            </div>
                            <div className="box-u">
                                <label for="">E-mail</label>
                                <input
                                    className="email"
                                    title="Digite seu e-mail."
                                    name="email"
                                    type="text"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="E-mail"
                                    required
                                />
                            </div>
                            <div className="box-u">
                                <label for="">Telefone</label>
                                <input
                                    className="telefone"
                                    title="Digite seu telefone"
                                    name="telefone"
                                    type="text"
                                    value={telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                    placeholder="Telefone"
                                    required
                                />
                            </div>
                            <div className="button-container">
                                <button className="button" type="submit">Ver datas disponíveis</button>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    );
}




