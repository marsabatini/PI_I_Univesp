import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Gerenciador_ADM from "../../../Components/Gerenciador";

import style_cadastros_gerais from "./cadastrogerais.module.css"

export default function Cadastro_Geral() {

    return (

        <>
            <div>
                <section>


                    <div class={style_cadastros_gerais.caixa_cadastro_professor}>
                        <Header />
                        <Gerenciador_ADM />
                        <section className={style_cadastros_gerais.cadastros_section}>

                            <h3 className={style_cadastros_gerais.titulo_cadastro_professor}>
                                Cadastros Gerais
                            </h3>

                            <div className={style_cadastros_gerais.quadro_cadastro_professor}>


                                <div className={style_cadastros_gerais.caixa_input}>

                                    <div className={style_cadastros_gerais.lock_checkbox}>Trancado</div>

                                    <label className={style_cadastros_gerais.trancar_destrancar}>
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>


                                    <div className={style_cadastros_gerais.input_aluno}>
                                        <input type="text" placeholder="Insira Nome ou Matricula" />
                                        <button type="submit"><span></span></button>
                                    </div>
                                </div>

                                <div className={style_cadastros_gerais.quadro_dados_cadastrais}>

                                    <form className={style_cadastros_gerais.tipo_cadastro}>

                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="iplano" /> <label
                                                for="iplano">Plano</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="ibolsa" /> <label
                                                for="ibolsa">Bolsa</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="icortesia" /> <label
                                                for="icortesia">Cortesia</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="iconvidado" /> <label
                                                for="iconvidado">Convidado</label>
                                        </div>


                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="iaulaexperimental" /> <label
                                                for="iaulaexperimental">Aula Experimental</label>
                                        </div>


                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="iprofessor" /> <label
                                                for="iprofessor">Professor</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="select_tipo_cadastro" id="itreinador" /> <label
                                                for="itreinador">Treinador</label>
                                        </div>

                                    </form>

                                    <form className={style_cadastros_gerais.dados_cadastrais}>

                                        <div className={style_cadastros_gerais.input_nome}>
                                            <label for="iusuario_name">Nome</label>
                                            <input type="text" required name="usuario_name" id="iusuario_name"></input>
                                        </div>

                                        <div className={style_cadastros_gerais.input_sobrenome}>
                                            <label for="iusuario_sobrenome">Sobrenome</label>
                                            <input type="text" required name="usuario_sobrenome" id="iusuario_sobrenome"></input>
                                        </div>

                                        <div>

                                            <div className={style_cadastros_gerais.input_CPF}>
                                                <label for="iusuario_CPF">CPF</label>
                                                <input type="" required name="usuario_CPF" id="iusuario_CPF"></input>
                                            </div>

                                            <div className={style_cadastros_gerais.input_data_nasc}>
                                                <label for="iusuario_data_nas">Data Nascimento</label>
                                                <input type="text" required name="usuario_data_nasc" id="iusuario_data_nas"></input>
                                            </div>

                                        </div>

                                        <div className={style_cadastros_gerais.input_email}>
                                            <label for="iusuario_email">Email</label>
                                            <input type="text" required name="usuario_email" id="iusuario_email"></input>
                                        </div>

                                        <div className={style_cadastros_gerais.input_tel}>
                                            <label for="iusuario_tel">Telefone</label>
                                            <input type="text" required name="usuario_tel" id="iusuario_tel"></input>
                                        </div>

                                        <div className={style_cadastros_gerais.input_endereco}>
                                            <label for="iusuario_endereco">Endereço</label>
                                            <input type="text" required name="usuario_endereco" id="iusuario_endereco"></input>
                                        </div>

                                        <div>

                                            <div className={style_cadastros_gerais.input_num}>
                                                <label for="iusuario_num">Número</label>
                                                <input type="text" required name="usuario_num" id="iusuario_num"></input>
                                            </div>

                                            <div className={style_cadastros_gerais.input_cidade}>
                                                <label for="iusuario_cidade">Cidade</label>
                                                <input type="text" required name="usuario_cidade" id="iusuario_cidade"></input>
                                            </div>

                                            <div className={style_cadastros_gerais.input_CEP}>
                                                <label for="iusuario_CEP">CEP</label>
                                                <input type="text" required name="usuario_CEP" id="iusuario_CEP"></input>
                                            </div>

                                        </div>

                                        <div>

                                            <div className={style_cadastros_gerais.input_reponsavel}>
                                                <label for="iusuario_reponsavel">Responsável</label>
                                                <input type="text" required name="usuario_reponsavel" id="iusuario_reponsavel"></input>
                                            </div>

                                            <div className={style_cadastros_gerais.input_tel_responsavel}>
                                                <label for="iusuario_tel_responsavel">Tel. do Responsável</label>
                                                <input type="text" required name="usuario_tel_responsavel" id="iusuario_tel_responsavel"></input>
                                            </div>

                                        </div>

                                        <div className={style_cadastros_gerais.tipo_cadastro_options}>

                                            <button type="submit">Redefinir Senha</button>
                                            <button type="submit">Alterar Dados</button>
                                            <button type="submit">Cadastrar Usuario</button>
                                            <button type="submit">Planos</button>
                                            <button type="submit">Imprimir</button>
                                            <button className={style_cadastros_gerais.delete} type="submit">Excluir</button>

                                        </div>

                                    </form>

                                </div>
                            
                            </div>

                        <Footer_Adm/>
                        </section>
                        
                    </div>
                    


                </section>
            </div>
        </>

    );

}